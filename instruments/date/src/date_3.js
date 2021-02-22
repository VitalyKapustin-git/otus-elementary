export default function getYoungest(user1Data, user2Data) {
  let user1 = user1Data;
  let user2 = user2Data;

  const [user1Day, user1Month, user1Year] = user1.split(".");
  const [user2Day, user2Month, user2Year] = user2.split(".");

  user1 = Date.parse(new Date(user1Year, user1Month, user1Day));
  user2 = Date.parse(new Date(user2Year, user2Month, user2Day));

  return user1 < user2 ? "Second user is younger" : "First user is younger";
}
