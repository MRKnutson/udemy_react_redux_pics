import React from "react";
import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID zmhjhsdx1EPawfCIXsS_2a0QDrbU8hMSEeO-OZXygpc",
  },
});
