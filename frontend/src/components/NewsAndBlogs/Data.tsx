import NewAndBlogsView from "./NewAndBlogsView";

function Data() {
    
  const newsList = [
    {
      title: "Title 1",
      text:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi ducimus saepe eveniet, voluptas alias quam atque quia, accusamus aspernatur dolore magnam eligendi explicabo consequuntur possimus",
      imageUrl: "https://dummyimage.com/500x500",
    },
    {
      title: "Title 2",
      text:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi ducimus saepe eveniet, voluptas alias quam atque quia, accusamus aspernatur dolore magnam eligendi explicabo consequuntur possimus",
      imageUrl: "https://dummyimage.com/500x500",
    },
    {
      title: "Title 3",
      text:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi ducimus saepe eveniet, voluptas alias quam atque quia, accusamus aspernatur dolore magnam eligendi explicabo consequuntur possimus",
      imageUrl: "https://dummyimage.com/500x500",
    },
    {
      title: "Title 4",
      text:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi ducimus saepe eveniet, voluptas alias quam atque quia, accusamus aspernatur dolore magnam eligendi explicabo consequuntur possimus",
      imageUrl: "https://dummyimage.com/500x500",
    },
];
  

  return newsList.map((item, index) => 
    <div>
      <NewAndBlogsView key={index} title={item.title} text={item.text} imageUrl={item.imageUrl} />
      </div>
  );
}

export default Data;
