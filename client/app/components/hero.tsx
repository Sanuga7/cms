import './hero.css';

const age = new Date().getFullYear() - 1929; 

const hero = () => {
  return (
    <section className='bg-[url("/unnamed.jpg")] bg-cover bg-center relative w-full h-[90vh] min-h-[400px] overflow-hidden flex items-center justify-center'>
         <div className="bg-black/25 w-full h-[100vh] flex items-center justify-center">
            <div>
                <h1 className='text-shadow-lg/30 text-white text-6xl title ms-5 lg:ms-0'><span className='color97'>{age}</span> Years Of Excellence</h1>
                <div className="items-center justify-center flex ">
                   <p className='text-shadow-lg/20 text-white text-2xl mt-2'>Nothing is Impossible</p>
                </div>
            </div>
         </div>
    </section>
  )
}

export default hero