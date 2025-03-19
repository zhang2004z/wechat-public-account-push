/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx14f71db15514e0dc',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '3b4a91e8dc137834a42db840dcb0207b',

  PROVINCE: '北京市',
  CITY: '北京市',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝宝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oyZ096kZRNp5k5jj6DozU2krPPOU',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'zKI2wCBMYNXsxXSDPbPTSJ2sXXi9PIlH17TMsEdUdyc',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '11-15',
      festivals: [
        
       
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '宝宝', year: '2004', date: '11-15',
        },
        {
          type: '节日', name: '相识纪念日', year: '202', date: '02-15',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'birthday_message.DATA', date: '2025-02-15' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2025-01-15' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'y1LDleOcTQtZVqaUjdmkTBGP8CP7bQlK9RrMn-brhnw',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oyZ096gQ6mVF6-idoHsrb2xKrBC8',
    }
  ],

}

module.exports = USER_CONFIG

