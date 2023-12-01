import { Contact } from "@/routes/Contact"

async function getContactAsync() {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(`[{
        "id": 1,
        "first": "Your",
        "last": "Name",
        "avatar": "https://placekitten.com/g/200/200",
        "twitter": "your_handle",
        "notes": "Some notes",
        "favorite": true
      }]`)
    }, 5000)
  })
}

async function contactLoader() {
  const jsonContact = await getContactAsync()
  let contacts: Contact[] = []
  contacts = JSON.parse(jsonContact) as Contact[]
  return { contacts }
}
export { contactLoader }