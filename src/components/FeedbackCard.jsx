import styles from '../style'
import { quotes } from '../assets'

const FeedbackCard = ({
   id,
   name,
   title,
   img,
   content,
}) => (
   <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>
      <img
         src={quotes}
         alt='quotes'
         className='w-[42px] h-[27px] object-contain'
      />
      <p className='font-poppins font-normal text-[18px] text-white leading-[32px] w-[85%] my-10'>
         {content}
      </p>
      <div className='flex flex-row gap-4'>
         <img
            src={img}
            alt='clientImg'
            className='w-[48px] h-[48px] rounded-full'
         />
         <div className='flex flex-col'>
            <h4 className='font-poppins font-semibold text-[18px] text-white leading-[32px]'>
               {name}
            </h4>
            <p className='font-poppins font-normal text-[16px] text-dimWhite leading-[24px]'>
               {title}
            </p>
         </div>
      </div>
   </div>
)

export default FeedbackCard
