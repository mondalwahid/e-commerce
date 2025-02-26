import React, { useState } from 'react'
import Typography from '../../common/Typography/Typography'
import colorConstants from '../../constants/colorConstants'
import { DashContainer, DashSubContainer, StyledInput } from './styles'
import ProductList from '../../components/ProductList/ProductList'
import Button from '../../common/Button/Button'
import CommonModal from '../../components/Modal/Modal'
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import { Checkbox } from "@mui/material";
import ProductVariants from '../../components/ProductVariants/ProductVariants'

const Dashboard = () => {
  const [openProductListModal, setOpenProductListModal] = useState(false);
  const [checked, setChecked] = useState(false);
  const handleOpenProductListModal = () => {
    setOpenProductListModal(true)
  };


  const dummyData = [
    {
      "id": 77,
      "title": "Fog Linen Chambray Towel - Beige Stripe",
      "variants": [
        {
          "id": 1,
          "product_id": 77,
          "title": "XS / Silver",
          "price": "49"
        },
        {
          "id": 2,
          "product_id": 77,
          "title": "S / Silver",
          "price": "49"
        },
        {
          "id": 3,
          "product_id": 77,
          "title": "M / Silver",
          "price": "49"
        }
      ],
      "image": {
        "id": 266,
        "product_id": 77,
        "src": "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/77/images/266/foglinenbeigestripetowel1b.1647248662.386.513.jpg?c=1"
      }
    },
    {
      "id": 80,
      "title": "Orbit Terrarium - Large",
      "variants": [
        {
          "id": 64,
          "product_id": 80,
          "title": "Default Title",
          "price": "109"
        }
      ],
      "image": {
        "id": 272,
        "product_id": 80,
        "src": "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/80/images/272/roundterrariumlarge.1647248662.386.513.jpg?c=1"
      }
    }
  ]

  return (
    <DashContainer>
      <DashSubContainer>
        <Typography
          text="Add Products"
          fontSize="16px"
          color={colorConstants?.primaryBlack}
          fontWeight="600"
          lineHeight="24px"
          style={{ marginLeft: "1.3rem" }}
        />

        {/* Product List below */}
        <ProductList handleOpenProductListModal={handleOpenProductListModal} />

        {/* Add Product Btn */}
        <div style={{ maxWidth: "60%", display: "flex", justifyContent: "flex-end" }}>
          <Button text="Add product" variant='outlined' color={colorConstants?.primaryGreen} style={{ width: 193, height: 48, marginTop: "1rem", borderWidth: "2px", fontWeight: 600 }} />
        </div>
      </DashSubContainer>

      {/* Product List Modal */}
      {openProductListModal ? (
        <CommonModal
          open={openProductListModal}
          handleClose={() => setOpenProductListModal(false)}
          title=""
          content=""
          width={663}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: ".6rem 1rem" }}>
            <Typography
              text="Select Products"
              fontSize="18px"
              color={colorConstants?.primaryBlack}
              fontWeight="500"
              lineHeight="27px"
            />
            <div onClick={() => setOpenProductListModal(false)}>
              <CloseIcon style={{ color: colorConstants?.primaryBlack, cursor: "pointer", }} />
            </div>
          </div>

          {/* Searchbar */}
          <div style={{ padding: "5px 16px", borderTop: "1px solid rgba(0, 0, 0, 0.1)" }}>
            <div style={{ display: "flex", alignItems: "center", border: "1px solid rgba(0, 0, 0, 0.07)", height: 32 }}>
              <SearchIcon style={{ fontSize: 17, color: "rgba(0, 0, 0, 0.4)", marginLeft: 10, marginRight: 10 }} />
              <StyledInput type="text" placeholder="Search Product" />
            </div>
          </div>

          {/* List of the products and their variants */}
          <div style={{ maxHeight: "350px", overflowY: "auto" }}>
          {dummyData?.map((e) => {
            return (
              <>
                <div style={{ borderTop: "1px solid rgba(0, 0, 0, 0.1)",  display: "flex", alignItems: "center", padding: ".5rem" }}>
                  <Checkbox checked={checked} onChange={() => setChecked(!checked)} style={{ color: colorConstants?.primaryGreen }} />
                  <img src={e?.image?.src} alt="" style={{ width: 36, height: 36, borderRadius: 4 }} />
                  <Typography
                    text={e?.title}
                    fontSize="16px"
                    color={colorConstants?.primaryBlack}
                    fontWeight="400"
                    lineHeight="24px"
                    style={{ marginLeft: 11 }}
                  />
                </div>

                {/* Variants */}
                <ProductVariants checked={checked} variantData={e?.variants} setChecked={setChecked} />
              </>
            )
          })}
          </div>

        </CommonModal>
      ) : null}
    </DashContainer>
  )
}

export default Dashboard