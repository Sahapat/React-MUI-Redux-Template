import { Contact } from "@/routes/Contact"
import { Skeleton } from "@mui/material"
import { FC, Suspense } from "react"
import { Await, Link, Outlet, useLoaderData } from "react-router-dom"

interface IProps { }

const RootRoute: FC<IProps> = ({ }) => {
  const { contacts } = useLoaderData() as { contacts: Contact[] }
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div
              id="search-spinner"
              aria-hidden
              hidden={true}
            />
            <div
              className="sr-only"
              aria-live="polite"
            ></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
          <Suspense fallback={<div>
            {/* For variant="text", adjust the height via font-size */}
            <Skeleton variant="text" sx={{ fontSize: '1rem' }} />

            {/* For other variants, adjust the size with `width` and `height` */}
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="rectangular" width={210} height={60} />
            <Skeleton variant="rounded" width={210} height={60} />
          </div>}>
            <Await
              resolve={contacts}
              errorElement={<div>Could not load contacts</div>}
              children={(resolveContacts: Contact[]) => (<nav>
                {resolveContacts.length ? (
                  <ul>
                    {resolveContacts.map((contact) => (
                      <li key={contact.id}>
                        <Link to={`contacts/${contact.id}`}>
                          {contact.first || contact.last ? (
                            <>
                              {contact.first} {contact.last}
                            </>
                          ) : (
                            <i>No Name</i>
                          )}{" "}
                          {contact.favorite && <span>★</span>}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>
                    <i>No contacts</i>
                  </p>
                )}
              </nav>)} />
          </Suspense>
        </div>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  )
}

export default RootRoute
