import axios from "axios";

export default {
  search: function() {
    return axios.get("https://api.hearthstonejson.com/v1/25770/enUS/cards.collectible.json");
  }
};
