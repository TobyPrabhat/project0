import Head from "next/head"

const Courses = () => {
  const contents = [
    { "id": "1",
      "image": "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/11/what-is-html-3.jpg",
     "courseName": "Learn Html for Beginers",
     "price": "15$"
  },
  {
    "id": "2",
    "image": "https://neilpatel.com/wp-content/uploads/2021/07/digital-marketing_featured-image.png",
    "courseName": "Learn Marketing",
    "price": "10$"
  },
  {
    "id": "3",
    "image": "https://149695847.v2.pressablecdn.com/wp-content/uploads/2019/10/python-1.jpg",
    "courseName": "Learn Python for Beginers",
    "price": "10$"
  },
  {
    "id": "4",
    "image": "http://itsourcecode.com/wp-content/uploads/2019/01/bd2_6f5_636_330-1-original.jpg",
    "courseName": "Learn Php For Begineers",
    "price": "10$"
  },
  {
    "id": "5",
    "image": "https://cdn.pixabay.com/photo/2018/02/16/02/03/pocket-watch-3156771__340.jpg",
    "courseName": "Learn How to Manage Time",
    "price": "19$"
  },
  {
    "id": "6",
    "image": "https://selecthealth.org/-/media/selecthealth/blogs/post/2022/01/being_positive_blog_lg.ashx",
    "courseName": "Learn How to Set a Positve MindSet",
    "price": "11$"
  }
  ];
  return (
    <div className="bg-white h-screen w-screen">
      <Head>
        <title>Study Today - Courses</title>
      </Head>
      <div className="flex place-items-center">
        <img src="https://images.vexels.com/media/users/3/224233/isolated/lists/d5ee0e9c87bb54cf867d7fb89c4570b8-online-education-logo.png" alt="ST" className="md:w-20 w-16"/>
        <h2 className="text-bold text-xl">Study <span className="text-yellow-400">Today</span></h2>
      </div>
      <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Courses To Complete <hr /></h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {contents.map((content) => (
            <div key={content.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={content.image} alt = {content.courseName}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="#" className="font-bold">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {content.courseName}
                    </a>
                  </h3>
                </div>
                <p className="text-sm font-medium text-gray-900">{content.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}

export default Courses
