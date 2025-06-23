let stat = Bot.getProperty(""+user.telegramid+"");

if (stat=="ban"){
Bot.sendMessage("*Only channel members can use this bot. If you want to use, then join channels And Click On Joined *");
}else{

let channel = "@HackingZoneAlliance";
let id = user.telegramid
Api.getChatMember({ 
chat_id : channel,
user_id : id,
on_result :"/check"})
}