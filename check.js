var user = options.result.status;
User.setProperty("status" , user, "string");
if (user=="member" | user =="administrator" | user=="creator"){
Bot.runCommand("/dash")
User.addToGroup("user")
}

if (user=="left"){
Bot.sendMessage("*Please Join Our Channel*")
}