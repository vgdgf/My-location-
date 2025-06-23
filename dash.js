Api.sendMessage({
  text: "<b>Select The Tools That You Want To Use</b>",
  reply_markup: {
    inline_keyboard: [
      [
        { text: "Hack Camera", callback_data: "/hc" },
      ],
    ]
  },
  parse_mode: "html"
});
