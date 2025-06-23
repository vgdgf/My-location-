Api.sendMessage({
  text:
    "<b>Only channel members can use this bot. If you want to use, then join all channels And Click On Joined.</b>",
  parse_mode: "html",
  disable_web_page_preview: true,
  reply_markup: {
    inline_keyboard: [
      [{ text: "Channel", url: "https://t.me/HackingZoneAlliance" }, { text: "Group", url: "https://t.me/HackingZoneAllianceChat" }],
      [{ text: "Joined", callback_data: "/joined" }]
    ]
  }
});