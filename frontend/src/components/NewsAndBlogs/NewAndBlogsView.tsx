interface newsProps {
  item: {
    title: string;
    text: string;
    imageUrl: string;
    direction: boolean;
  };
  index: number;
}
function NewAndBlogsView({ item, index }: newsProps) {

  return (
    
      <div className='flex w-full justify-center items-center rounded-3xl bg-navyBlueLight p-10 mb-12 opacity-80' style={{ flexDirection: item.direction ? "row-reverse" : "row"  }}>
        <div className='flex w-1/2 flex-col gap-10 justify-center items-center'>
                  <h1 className='text-left text-4xl'>{ item.title}</h1>
          <p className="px-12 tex-center">
            {item.text}
          </p>
        </div>
        <div className='w-1/2'>
          <img
            src= {item.imageUrl}
            alt='Blogs'
            className='w-full h-[250px] md:h-[500px] object-cover rounded-3xl'
          />
        </div>
      </div>
  );
}

export default NewAndBlogsView;
