import { Link } from "react-router-dom";
import Header from "../../ui/Header";
import useLogout from "../../features/shared/authentication/useLogout";
import User from "../../ui/User";
import useUser from "../../features/shared/authentication/useUser";
import Loader from "../../ui/loader";

export default function Profile() {
  const { user, isLoaing } = useUser();
  const img = user?.image?.secure_url;

  const logout = useLogout();
  if (isLoaing) return <Loader />;
  return (
    <>
      <Header>My profile</Header>
      <div className="container">
        <div className="flex flex-row items-center gap-5 ml-4 mb-5">
          <div className="w-[80px] aspect-square">
            {img ? (
              <img
                src={img}
                className="w-full h-full object-center object-cover rounded-full overflow-hidden "
              />
            ) : (
              <User />
            )}
          </div>
          <div className=" flex flex-col">
            <span className=" capitalize text-2xl">{user?.userName}</span>
            <span className=" text-gray text-medium">{user?.email}</span>
          </div>
        </div>
        <ul>
          <li>
            <Link
              to="editProfile"
              className="flex flex-row items-center justify-between border-b border-text/10 p-4"
            >
              <div>
                <span className=" text-medium tracking-wide font-medium">
                  Edit profile
                </span>
                <p className=" text-gray text-xsmall">
                  Change password, profile picture
                </p>
              </div>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                aria-hidden="true"
                height="15px"
                width="15px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </li>
          <li>
            <Link
              to="orders"
              className="flex flex-row items-center justify-between border-b border-text/10 p-4"
            >
              <div>
                <span className=" text-medium tracking-wide font-medium">
                  My orders
                </span>
                <p className=" text-gray text-xsmall">Already have 12 orders</p>
              </div>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                aria-hidden="true"
                height="15px"
                width="15px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </li>
          <li>
            <Link
              to="shippingAddresses"
              className="flex flex-row items-center justify-between border-b border-text/10 p-4"
            >
              <div>
                <span className=" text-medium tracking-wide font-medium">
                  Shipping addresses
                </span>
                <p className=" text-gray text-xsmall">3 addresses</p>
              </div>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                aria-hidden="true"
                height="15px"
                width="15px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </li>
          <li>
            <Link
              to="paymentMethod"
              className="flex flex-row items-center justify-between border-b border-text/10 p-4"
            >
              <div>
                <span className=" text-medium tracking-wide font-medium">
                  Payment Methods
                </span>
                <p className=" text-gray text-xsmall">Visa **34</p>
              </div>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                aria-hidden="true"
                height="15px"
                width="15px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </li>
          <li>
            <Link
              to="promocodes"
              className="flex flex-row items-center justify-between border-b border-text/10 p-4"
            >
              <div>
                <span className=" text-medium tracking-wide font-medium">
                  Promocodes
                </span>
                <p className=" text-gray text-xsmall">
                  You have Special promocodes
                </p>
              </div>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                aria-hidden="true"
                height="15px"
                width="15px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </li>
          <li>
            <Link
              to="myReviews"
              className="flex flex-row items-center justify-between border-b border-text/10 p-4"
            >
              <div>
                <span className=" text-medium tracking-wide font-medium">
                  My reviews
                </span>
                <p className=" text-gray text-xsmall">
                  Reviews for {"4"} items
                </p>
              </div>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                aria-hidden="true"
                height="15px"
                width="15px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </li>
          <li>
            <Link
              to="notifications"
              className="flex flex-row items-center justify-between border-b border-text/10 p-4"
            >
              <div>
                <span className=" text-medium tracking-wide font-medium">
                  Notifications
                </span>
                <p className=" text-gray text-xsmall">
                  Manage your notifications here to customize your experience
                </p>
              </div>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                aria-hidden="true"
                height="15px"
                width="15px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </li>
          <li
            className="flex flex-row items-center gap-4 p-4 cursor-pointer"
            onClick={logout}
          >
            <span className=" text-medium tracking-wide font-medium">
              logout
            </span>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="15px"
              width="15px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M312 372c-7.7 0-14 6.3-14 14 0 9.9-8.1 18-18 18H94c-9.9 0-18-8.1-18-18V126c0-9.9 8.1-18 18-18h186c9.9 0 18 8.1 18 18 0 7.7 6.3 14 14 14s14-6.3 14-14c0-25.4-20.6-46-46-46H94c-25.4 0-46 20.6-46 46v260c0 25.4 20.6 46 46 46h186c25.4 0 46-20.6 46-46 0-7.7-6.3-14-14-14z"></path>
              <path d="M372.9 158.1c-2.6-2.6-6.1-4.1-9.9-4.1-3.7 0-7.3 1.4-9.9 4.1-5.5 5.5-5.5 14.3 0 19.8l65.2 64.2H162c-7.7 0-14 6.3-14 14s6.3 14 14 14h256.6L355 334.2c-5.4 5.4-5.4 14.3 0 19.8l.1.1c2.7 2.5 6.2 3.9 9.8 3.9 3.8 0 7.3-1.4 9.9-4.1l82.6-82.4c4.3-4.3 6.5-9.3 6.5-14.7 0-5.3-2.3-10.3-6.5-14.5l-84.5-84.2z"></path>
            </svg>
          </li>
        </ul>
      </div>
    </>
  );
}
