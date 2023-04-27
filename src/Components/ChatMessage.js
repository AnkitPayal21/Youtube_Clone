
const ChatMessage = ({name, message}) => {
  return (
    <div className="flex items-center my-2 bg-gray-200">
         <img className="h-10 " alt="user" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR81iX4Mo49Z3oCPSx-GtgiMAkdDop2uVmVvw&usqp=CAU"/>
         <span className="font-bold mx-4">{name}</span>
         <span>{message}</span>
    </div>
  )
}

export default ChatMessage