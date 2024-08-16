function Comment() {
  return (
    <div className="flex items-start gap-5">
      {/* Image of user how comments on video */}
      <div className="h-10 w-10 p-5 bg-green-600 flex justify-center items-center font-bold text-white rounded-full text-xl">
        P
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 items-center">
          <p className="text-white">Peter Awad</p>
          <p className="text-xs text-gray-400">8 days ago</p>
        </div>
        <p className="text-sm text-white">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque quos
          sed cum tenetur aliquid, accusantium qui. Distinctio modi libero quo
          harum debitis nostrum tempore tempora numquam. Aut similique dolore
          magni.
        </p>
      </div>
    </div>
  );
}

export default Comment;
