export default function DollarInfo({data}){

   if(!data) return <div>Error</div>

   return (
    <div>
        {data.data}
    </div>
   )

}