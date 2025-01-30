import { useState } from "react";
import User from "../../../ui/User";
import BottomSheetModal from "../../../ui/BottomSheetModal";
import Modal from "../../../ui/Modal";
import Button from "../../../ui/Button";
import ConfirmDelete from "../../../ui/ConfirmDelete";
import useUser from "../../shared/authentication/useUser";
import useUpdateProfilePicture from "./useUpdateProfilePicture";
import SmallSpinner from "../../../ui/SmallSpinner";
import useMobileScreen from "../../../Hooks/useMobileScreen";
import useDeleteProfilePicture from "./useDelete";

export default function UpdateProfilePic() {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [newImg, setNewImg] = useState(null);
  const [imgPreview, setImgPreview] = useState(null);

  const { user } = useUser();
  const { updateProfilePicture, isLoading: isUpdating } =
    useUpdateProfilePicture();
  const { deleteProfilePicture, isUpdating: isDeleting } =
    useDeleteProfilePicture();
  const isMobile = useMobileScreen();

  const currImg = user?.image?.secure_url;
  return (
    <>
      {isMobile ? (
        <>
          <MobileUpdateProfilePic
            newImg={newImg}
            setNewImg={setNewImg}
            imgPreview={imgPreview}
            setImgPreview={setImgPreview}
            currImg={currImg}
            updateProfilePicture={updateProfilePicture}
            isUpdating={isUpdating}
            deleteProfilePicture={deleteProfilePicture}
            isBottomSheetOpen={isBottomSheetOpen}
            setIsBottomSheetOpen={setIsBottomSheetOpen}
          />
        </>
      ) : (
        <LargeScreenProfilePic
          currImg={currImg}
          newImg={newImg}
          setNewImg={setNewImg}
          imgPreview={imgPreview}
          setImgPreview={setImgPreview}
          isUpdating={isUpdating}
          updateProfilePicture={updateProfilePicture}
          deleteProfilePicture={deleteProfilePicture}
          isDeleting={isDeleting}
        />
      )}
    </>
  );
}
function MobileUpdateProfilePic({
  isBottomSheetOpen,
  setIsBottomSheetOpen,
  setNewImg,
  setImgPreview,
  currImg,
  newImg,
  imgPreview,
  isUpdating,
  updateProfilePicture,
  deleteProfilePicture,
}) {
  const [window, setWindow] = useState("");
  function reset() {
    setNewImg(null);
    setImgPreview(null);
    setWindow("");
  }
  return (
    <>
      <section className=" container mb-10 ">
        <div
          className=" mx-auto relative rounded-full  bg-text p-1 w-fit cursor-pointer"
          onClick={() => setIsBottomSheetOpen(true)}
        >
          <div className="w-[128px] aspect-square">
            {currImg ? (
              <img
                src={currImg}
                loading="lazy"
                className="w-full h-full object-center object-cover rounded-full overflow-hidden "
              />
            ) : (
              <User size={128} />
            )}
          </div>
          <span className=" absolute right-[20%] bottom-[10%] translate-x-[50%] translate-y-[50%] bg-text text-primary-background rounded-full p-2 ">
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
              <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"></path>
            </svg>
          </span>
        </div>
      </section>
      <BottomSheetModal
        isOpen={isBottomSheetOpen}
        header={"Updat Profile Picture"}
        onClose={() => {
          setIsBottomSheetOpen(false);
          reset();
        }}
      >
        <div className="container my-10">
          {window == "choose" ? (
            <div className=" flex flex-col items-center gap-10 my-10">
              <div className="h-[180px] w-[180px] sm:h-[250px] sm:w-[250px] md:h-[300px] md:w-[300px] aspect-square rounded-full overflow-hidden">
                {imgPreview ? (
                  <img
                    src={imgPreview}
                    className="h-full w-full object-cover object-center"
                  />
                ) : currImg ? (
                  <img
                    src={currImg}
                    className="h-full w-full object-cover object-center"
                  />
                ) : (
                  <User size={200} />
                )}
              </div>
              <div className="flex gap-5 sm:gap-10 md:gap-12">
                {imgPreview ? (
                  <Button
                    size="medium"
                    disabled={isUpdating}
                    onClick={() => {
                      if (newImg) {
                        const fd = new FormData();
                        fd.append("image", newImg);
                        updateProfilePicture(fd, {
                          onSuccess: () => {
                            reset();
                            history.back();
                          },
                        });
                      }
                    }}
                  >
                    <span className="absolute top-1/2 translate-y-[-50%] translate-x-[50%] left-[16px]">
                      {isUpdating ? <SmallSpinner /> : ""}
                    </span>
                    Apply
                  </Button>
                ) : (
                  <Button size="medium">
                    <input
                      type="file"
                      accept="image/*"
                      style={{ opacity: "0" }}
                      className=" opacity-0 absolute top-0 left-0 overflow-hidden w-full h-full cursor-pointer"
                      title=""
                      onChange={(e) => {
                        const file = e.target.files[0];
                        setNewImg(file);
                        setImgPreview(URL.createObjectURL(file));
                      }}
                    />
                    choose
                  </Button>
                )}
                <Button
                  size="medium"
                  style="outline"
                  onClick={() => {
                    reset();
                    setIsBottomSheetOpen(false);
                  }}
                >
                  cancel
                </Button>
              </div>
            </div>
          ) : window == "delete" ? (
            <div className=" w-fit mx-auto">
              <div className="space-y-10 mt-5 flex flex-col">
                <p className="text-small">
                  Are you sure you want to delete profile picture permanently?
                  This action cannot be undone.
                </p>
                <div className="space-x-4 flex self-end">
                  <Button
                    type={"button"}
                    onClick={"delete"}
                    disabled={!currImg}
                  >
                    Delete
                  </Button>
                  <Button
                    style="outline"
                    onClick={() => {
                      reset();
                      deleteProfilePicture();
                      setIsBottomSheetOpen(false);
                    }}
                  >
                    cancel
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className=" flex flex-col gap-5 text-large my-5 font-medium container ">
              <div
                onClick={() => setWindow("choose")}
                className=" relative overflow-hidden flex items-center justify-between p-4 bg-secondary-background rounded-md hover:bg-primary-color hover:text-primary-background cursor-pointer transition-all duration-200 ease-in-out"
              >
                <p>Choose photo</p>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  height="20px"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div onClick={() => setWindow("delete")}>
                <div className="flex items-center justify-between p-4 bg-secondary-background rounded-md hover:bg-primary-color hover:text-primary-background cursor-pointer transition-all duration-200 ease-in-out">
                  <p>Delete photo</p>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    height="20px"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          )}
        </div>
      </BottomSheetModal>
    </>
  );
}
function LargeScreenProfilePic({
  currImg,
  newImg,
  setNewImg,
  imgPreview,
  setImgPreview,
  isUpdating,
  updateProfilePicture,
  deleteProfilePicture,
}) {
  return (
    <Modal>
      <section className=" container mb-10 ">
        <div className=" mx-auto relative rounded-full  bg-text p-1 w-fit cursor-pointer">
          <div className="w-[128px] aspect-square">
            {currImg ? (
              <img
                src={currImg}
                loading="lazy"
                className="w-full h-full object-center object-cover rounded-full overflow-hidden "
              />
            ) : (
              <User size={128} />
            )}
          </div>
          <Modal.Open opens="edit">
            <span className=" absolute right-[20%] bottom-[10%] translate-x-[50%] translate-y-[50%] bg-text text-primary-background rounded-full p-2 ">
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
                <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"></path>
              </svg>
            </span>
          </Modal.Open>
          <Modal.Window name="edit">
            <div className="my-5">
              <div className="flex gap-20 items-center ">
                <Modal.Open opens="choose">
                  <button className="flex flex-col gap-3 items-center justify-center p-3 bg-secondary-background rounded-md drop-shadow-md hover:bg-primary-color hover:text-primary-background cursor-pointer transition-all duration-200 ease-in-out">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      height="80px"
                      width="80px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <p className="text-xsmall font-bold">Choose photo</p>
                  </button>
                </Modal.Open>

                <Modal.Open opens="delete">
                  <button
                    disabled={!currImg}
                    className={`flex flex-col gap-3 items-center justify-center p-3 bg-secondary-background rounded-md drop-shadow-md ${
                      currImg
                        ? "hover:bg-primary-color hover:text-primary-background cursor-pointer transition-all duration-200 ease-in-out"
                        : ""
                    }`}
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      height="80px"
                      width="80px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <p className="text-xsmall font-bold">Delete photo</p>
                  </button>
                </Modal.Open>
              </div>
            </div>
          </Modal.Window>
          <Modal.Window name="choose">
            <UpdatePicModal
              currImg={currImg}
              newImg={newImg}
              setNewImg={setNewImg}
              imgPreview={imgPreview}
              setImgPreview={setImgPreview}
              isUpdating={isUpdating}
              updateProfilePicture={updateProfilePicture}
            />
          </Modal.Window>
          <Modal.Window name="delete">
            <ConfirmDelete
              resourceName="profile picture"
              onConfirm={deleteProfilePicture}
            />
          </Modal.Window>
        </div>
      </section>
    </Modal>
  );
}
function UpdatePicModal({
  onCloseModal,
  currImg,
  newImg,
  setNewImg,
  imgPreview,
  setImgPreview,
  isUpdating,
  updateProfilePicture,
}) {
  function reset() {
    setNewImg(null);
    setImgPreview(null);
  }
  return (
    <div className=" flex flex-col items-center gap-10">
      <div className="h-[180px] w-[180px] sm:h-[250px] sm:w-[250px] md:h-[300px] md:w-[300px] aspect-square rounded-full overflow-hidden">
        {imgPreview ? (
          <img
            src={imgPreview}
            className="h-full w-full object-cover object-center"
          />
        ) : currImg ? (
          <img
            src={currImg}
            className="h-full w-full object-cover object-center"
          />
        ) : (
          <User size={200} />
        )}
      </div>
      <div className="flex gap-5 sm:gap-10 md:gap-12">
        {imgPreview ? (
          <Button
            size="medium"
            disabled={isUpdating}
            onClick={() => {
              if (newImg) {
                const fd = new FormData();
                fd.append("image", newImg);
                updateProfilePicture(fd, {
                  onSuccess: () => {
                    reset();
                    history.back();
                  },
                });
              }
            }}
          >
            <span className="absolute top-1/2 translate-y-[-50%] translate-x-[50%] left-[16px]">
              {isUpdating ? <SmallSpinner /> : ""}
            </span>
            Apply
          </Button>
        ) : (
          <Button size="medium">
            choose
            <input
              type="file"
              accept="image/*"
              style={{ opacity: "0" }}
              className="cursor-pointer opacity-0 absolute top-0 left-0 overflow-hidden w-full h-full "
              title=""
              onClick={() => {
                setImgPreview(null);
              }}
              onChange={(e) => {
                const file = e.target.files[0];
                if (!file) return;
                setNewImg(file);
                setImgPreview(URL.createObjectURL(file));
              }}
            />
          </Button>
        )}
        <Button
          size="medium"
          style="outline"
          onClick={() => {
            reset();
            onCloseModal();
          }}
        >
          cancel
        </Button>
      </div>
    </div>
  );
}
