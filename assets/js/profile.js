function open_cpw_modal() {
    $('#cpw-prompt').modal("show");
    $('#confirmCPW').click(function (e) {
			old_pw = $('#user-cpw-old-pw').val();
			new_pw = $('#user-cpw-new-pw').val();
			cpw = $('#user-cpw-confirm-pw').val();

			//var reg = /^[A-Za-z0-9]+$/;

			if (new_pw != cpw) {
                alert('两次输入的密码不一致！');
                setTimeout(() => {
                    open_cpw_modal()
                }, 300);
                //fucking modal....
			} else if (new_pw.length < 0) {
                alert('密码必须大于六位！');
                setTimeout(() => {
                    open_cpw_modal()
                }, 300);
			} else {
				$('#cpw-prompt-toggle').button('loading');
				_cpw(old_pw, new_pw, function() {
                    $('#cpw-prompt-toggle').button('reset');
                });
			}
	});
}
$('#cpw-prompt-toggle').click(function () {
    open_cpw_modal();
});
