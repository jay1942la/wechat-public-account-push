export const config = {
    // 公众号配置
    // 公众号appId
    appId: "wxd58c17557b2df53e",
    // 公众号appSecret
    appSecret: "3ae4ec97247ec62211b2dce748247f95",
    // 模板消息id
    templateId: "gHdGEvRuHW9549OcNr6SmtqoBend9Z2juvPanMNudoc ",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    user: ["Nuyoah_Eliauk-2","s1943jay"],
     
    // 信息配置
    // 所在省份
    province: "江苏",
    // 所在城市
    city: "南通",
    // 生日，修改名字为对应需要显示的名字，如果生日为农历， type为 r
    birthdays: [
      {"name": "小艾", "year": "2001", "date": "2-22", "type": 'r'},
    ],
    // 在一起的日子，格式同上
    loveDate: "2022-07-26",
    // 结婚纪念日


// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// 今天是我们结婚的第{{marry_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
