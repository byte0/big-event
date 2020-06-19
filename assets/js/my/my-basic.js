$(function () {
  // 获取Layui的form对象
  var form = layui.form

  // 调用接口加载用户信息
  function loadUserInfo () {
    $.ajax({
      type: 'get',
      url: 'my/userinfo',
      success: function (res) {
        // 把数据填充到表单
        // $('#form input[name=username]').val(res.data.username)
        // $('#form input[name=nickname]').val(res.data.nickname)
        // $('#form input[name=email]').val(res.data.email)
        // 基于layui方式填充表单
        // basicForm是Form标签的lay-filter属性值，用于表单数据填充
        form.val('basicForm', res.data)
      }
    })
  }
  loadUserInfo()
})