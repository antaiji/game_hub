import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "7abb5f40031b451dbcffc368937efe9a",
  },
});
