

function DisplayPage( page )
{
	$('error_display').innerHTML = '';
	$('error_display').style.display = 'none';

	switch ( page )
	{
		case 'code':
			$('registerkey_form').show()
			$('registerkey_examples_text').show();
			$('receipt_form').hide();
			$('register_btn').show();
			$('register_btn_in_progress').hide();
			ValidationMarkFieldOk( $('purchase_confirm_ssa') );

			$('product_key').value ='';
			$('accept_ssa').checked = false;
		break;

		case 'receipt':
			$('receipt_form').show();
			$('registerkey_form').hide();
			$('registerkey_examples_text').hide();

			break;
	}
}

function ReportJSError(message, e )
{
	try 
	{
		if (typeof e == 'string')
    		e = new Error(e);

		ReportError( '/public/javascript/registerkey.js?l=schinese', message, message+":\n\n  Exception: "+e.name+" - "+e.message+"\n" );
	} catch( e ) 
	{
			}
}

var g_bRegisterKeyCallRunning = false;
function RegisterProductKey()
{
	if( g_bRegisterKeyCallRunning )
		return;

	if ( $('product_key').value == '' )
	{
		DisplayErrorMessage( '您必须输入产品序列号才能继续。' );
		return;
	}

	if ( !$('accept_ssa') || !$('accept_ssa').checked )
	{
		DisplayErrorMessage( '您必须同意《Steam 订户协议》的所有条款才能继续付款。' );
		ValidationMarkFieldBad( $('purchase_confirm_ssa') );
		return;
	}

	try
	{
		g_bRegisterKeyCallRunning = true;

		$('register_btn').hide();
		$('register_btn_in_progress').show();

		new Ajax.Request('https://store.steampowered.com/account/ajaxregisterkey/',
		{
			method:'post',
			parameters: {
				'product_key' : $('product_key').value,
				'sessionid' : g_sessionID
			},
			onSuccess: function(transport){
				g_bRegisterKeyCallRunning = false;
				if ( transport.responseText ){
					try {
						var result = transport.responseText.evalJSON(true);
					} catch ( e ) {
						// Failure
						OnRegisterProductKeyFailure( 0, null );
					}

					if ( result.success == 1 )
					{
						OnRegisterProductKeySuccess( result );
						return;
					}
					else if ( result.purchase_result_details !== undefined && result.purchase_receipt_info )
					{
						OnRegisterProductKeyFailure( result.purchase_result_details, result.purchase_receipt_info );
						return;
					}
				}

								OnRegisterProductKeyFailure( 0, null );
			},
			onFailure: function(){
								g_bRegisterKeyCallRunning = false;
				OnRegisterProductKeyFailure( 0, null );
			}
		});
	}
	catch(e)
	{
		ReportJSError( 'Failed gathering form data and calling ajaxregisterkey', e );
	}
}


function OnRegisterProductKeySuccess( result )
{
	$('error_display').innerHTML = '';
	$('error_display').hide();

	UpdateReceiptForm( result );
	DisplayPage( 'receipt' );
}

function GetGameNameForFailure( receipt )
{
	if ( receipt )
	{
		if ( receipt.line_items && receipt.line_items[0] && receipt.line_items[0].line_item_description )
		{
			return receipt.line_items[0].line_item_description;
		}
	}
	return false;
}

function OnRegisterProductKeyFailure( ePurchaseResult, receipt )
{
	var sErrorMessage = '发生了一个意外错误。您的产品代码尚未兑换。请在 30 分钟后重新兑换该代码。如问题仍然存在，请联系 <a href="https://help.steampowered.com/wizard/HelpWithWalletCode">Steam 客服</a>寻求进一步的帮助。';
	var strGameName = GetGameNameForFailure( receipt );

	switch ( ePurchaseResult )
	{
		case 14:
			sErrorMessage = '您输入的产品代码无效，或者不是产品代码。请仔细检查是否输错了序列号。I、L 和 1 看上去很相似，V 和 Y、0 和 O 亦是如此。如果您要兑换礼物卡，请点击<a href="https://store.steampowered.com/account/redeemwalletcode">此处</a>进行兑换。';
			break;

		case 15:
			sErrorMessage = '您输入的产品代码已经被另一个 Steam 帐户激活，该代码无法再次使用。请联系您购买产品的零售商或线上销售商以寻求协助。';
			break;

		case 53:
			sErrorMessage = '该帐户或互联网地址最近的激活尝试过多。请稍后重试您的产品代码。';
			break;

		case 13:
			if ( strGameName )
			{
				sErrorMessage = V_EscapeHTML( '抱歉，%1$s 在该国/地区不能购买。您的产品序列号尚未兑换。'.replace( /\%1\$s/, strGameName ) );
			}
			else
			{
				sErrorMessage = '抱歉，本产品在此国家/地区不能购买。您的产品序列号尚未兑换。';
			}
			break;

		case 9:
			sErrorMessage = '该 Steam 帐户已拥有此特惠中包含的产品。请前往 Steam 客户端的库进行访问。';
			break;

		case 24:
			sErrorMessage = '您输入的产品代码在激活之前需要先拥有另一产品。\n\n如果您正尝试激活扩展包或可下载内容，请先激活原版游戏，然后再激活此附加内容。';
			break;

		case 36:
			if ( strGameName )
			{
				sErrorMessage = V_EscapeHTML( '您所输入的产品代码需要您首先在 PlayStation®3 系统上玩过 %1$s 后才能注册。\n\n请执行以下操作：\n\n- 在 PlayStation®3 系统上启动 %1$s\n\n- 将您的 Steam 帐户与您的 PlayStation®3 Network 帐户链接\n\n- 在 PlayStation®3 系统上运行 %1$s 同时连接到 Steam\n\n- 通过 Steam 注册此产品代码。'.replace( /\%1\$s/g, strGameName ) );
			}
			else
			{
				sErrorMessage = '您所输入的产品代码需要您首先在 PlayStation®3 系统上玩过此游戏后才能注册。\n\n请执行以下操作：\n\n- 在 PlayStation®3 系统上启动此游戏\n\n- 将您的 Steam 帐户与您的 PlayStation®3 Network 帐户链接\n\n- 在 PlayStation®3 系统上运行此游戏的同时连接到 Steam\n\n- 通过 Steam 注册此产品代码。';
			}
			break;

		case 4:
		default:
			sErrorMessage = '发生了一个意外错误。您的产品代码尚未兑换。请在 30 分钟后重新兑换该代码。如问题仍然存在，请联系 <a href="https://help.steampowered.com/wizard/HelpWithWalletCode">Steam 客服</a>寻求进一步的帮助。';
			break;
	}

	DisplayErrorMessage( sErrorMessage );
	$('register_btn').show();
	$('register_btn_in_progress').hide();
}

function UpdateReceiptForm( result )
{
	var eList = $('registerkey_productlist');

	var strLines = '';
	for ( item of result.purchase_receipt_info.line_items )
	{
		strLines = strLines + '<div class="registerkey_lineitem">' + V_EscapeHTML( item.line_item_description ) + '</div>';
	}
	eList.innerHTML = strLines;
}

function DisplayErrorMessage( strMessage )
{
	$('error_display').innerHTML = strMessage.replace( /\n/g, '<br/>');
	$('#error_display').show();
	Effect.ScrollTo( 'error_display' );
	
	new Effect.Highlight( 'error_display', { endcolor : '#000000', startcolor : '#ff9900' } );
}
