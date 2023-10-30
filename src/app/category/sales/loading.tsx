"use client";

import { TailSpin } from "react-loader-spinner";

const Loading = () => {
    return ( 
      <div className="flex w-full h-full flex-1 flex-col items-center justify-center">
      <TailSpin
        height="90"
        width="90"
        color="hsl( 216 100% 50%)"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
     );
}
 
export default Loading;