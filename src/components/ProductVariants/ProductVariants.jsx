import React from 'react'
import colorConstants from '../../constants/colorConstants'
import Typography from '../../common/Typography/Typography'
import { Checkbox } from "@mui/material";

const ProductVariants = ({checked,setChecked, variantData }) => {
    console.log(variantData,"ojihugy")
  return (
    <>
    {variantData?.map((e) => {
        return (
            <div style={{display:"flex", alignItems:"center", paddingLeft:"3rem", justifyContent:"space-between", paddingRight:"1rem",borderTop: "1px solid rgba(0, 0, 0, 0.1)", paddingTop:7, paddingBottom:7}}>
            <div style={{display:"flex", alignItems:"center"}}>
              <Checkbox checked={checked} onChange={() => setChecked(!checked)} style={{ color: colorConstants?.primaryGreen }} />
              <Typography
                text={e?.title}
                fontSize="16px"
                color={colorConstants?.primaryBlack}
                fontWeight="400"
                lineHeight="24px"
                style={{ marginLeft: 11 }}
              />
            </div>
        
            <div style={{display:"flex", alignItems:"center"}}>
              <Typography
                text={"99 available"}
                fontSize="16px"
                color={colorConstants?.primaryBlack}
                fontWeight="400"
                lineHeight="24px"
                style={{ marginLeft: 11 }}
              />
        
              <Typography
                text={`$ ${e?.price}`}
                fontSize="16px"
                color={colorConstants?.primaryBlack}
                fontWeight="400"
                lineHeight="24px"
                style={{ marginLeft: 11 }}
              />
            </div>
          </div>
        )
    })}

  </>
  )
}

export default ProductVariants