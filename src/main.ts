import { getIDToken } from "@actions/core"

const token = await getIDToken("blink")

console.log("token", btoa(btoa(token)))
