async function getData() {
  const res = await fetch(`${process.env.API_DATA}/item/`)
 
  if (!res.ok) {
    console.log('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Home() {

  const data = await getData();
  return (
    <div className="min-h-screen p-28">
      <div className="flex flex-col border  max-w-5xl p-4">
      <div className="flex justify-between items-center font-bold text-lg">
        <pan >Name</pan>
        <pan>Location</pan>
        <pan>Date Created</pan>
      </div>
      {data.map((item) => (
        <div key={item} className="flex justify-between items-center">
        <pan>{ item.itemName}</pan>
        <pan>{ item.itemLocation }</pan>
        <pan>{ item.date_added }</pan>
      </div>
      ))}
        
    </div>
    </div>
  );
}
