import React from 'react'

const Filter = (props) => {
    let filterData = props.filterData;
    let category = props.category;
    let setCategory = props.setCategory;

    function filterHandler(title){
      setCategory(title);
    }

  return (
    <div className='flex justify-center items-center py-2 gap-2 bg-slate-600 text-white'>
      {
        filterData.map((data)=>{
            return <button onClick={()=>filterHandler(data.title)} key={data.id} className='border-0 rounded-md border-transparent bg-gray-900 py-1 px-3'>{data.title}</button>
        })
      }
    </div>
  )
}

export default Filter
