import Sheet from "react-modal-sheet";

export default function BottomSheetModal({
  isOpen,
  header,
  onClose,
  children,
  containerAdditionalStyle,
}) {
  return (
    isOpen && (
      <Sheet
        isOpen={isOpen}
        onClose={onClose}
        detent="content-height"
        tweenConfig={{ ease: "easeInOut", duration: 1 }}
      >
        <Sheet.Backdrop
          onTap={(e) => e.preventDefault()}
          className="backdrop-blur-[1px] "
        />
        <Sheet.Container
          style={{ borderRadius: "30px 30px 0 0" }}
          className={` !bg-primary-background w-full ${
            containerAdditionalStyle ? containerAdditionalStyle : ""
          }`}
        >
          <span className=" absolute top-2 left-1/2 translate-x-[-50%] w-[70px] h-[5px] bg-gray rounded-full cursor-pointer"></span>
          {header ? (
            <Sheet.Header className=" text-center p-6 ">{header}</Sheet.Header>
          ) : (
            ""
          )}
          <Sheet.Content className="flex flex-col gap-10 overflow-y-auto text-xl w-full ">
            <Sheet.Scroller>{children}</Sheet.Scroller>
          </Sheet.Content>
        </Sheet.Container>
      </Sheet>
    )
  );
}
