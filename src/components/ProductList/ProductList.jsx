import React from 'react'
import Typography from '../../common/Typography/Typography'
import colorConstants from '../../constants/colorConstants'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import CreateIcon from '@mui/icons-material/Create';
import { ListMainContainer, ListSubContainer, DetailedListContainer, ModalInputContainer, ListSubContainerRHS } from './styles';
import Button from '../../common/Button/Button';

const ProductList = ({handleOpenProductListModal}) => {

    return (
        <ListMainContainer>
            <ListSubContainer>
                <Typography
                    text="Product"
                    fontSize="14px"
                    color={colorConstants?.primaryBlack}
                    fontWeight="500"
                    lineHeight="16px"
                    style={{marginLeft:"3.5rem", marginBottom:"1rem"}}
                />
                <DetailedListContainer>
                    <DragIndicatorIcon fontSize='14px' style={{ color: "rgba(0, 0, 0, 0.5)" }} />
                    <Typography
                        text="1."
                        fontSize="14px"
                        color={"rgba(0, 0, 0, 0.8)"}
                        fontWeight="400"
                        lineHeight="16px"
                        style={{marginLeft:8, marginRight:8}}
                    />

                    {/* Selecte product modal input */}
                    <ModalInputContainer onClick={() => handleOpenProductListModal()}>
                        <Typography
                            text="Select Product"
                            fontSize="14px"
                            color={"rgba(0, 0, 0, 0.5)"}
                            fontWeight="400"
                            lineHeight="21px"
                        />

                        <CreateIcon fontSize='16px' style={{ color: "rgba(0, 0, 0, 0.2)" }} />
                    </ModalInputContainer>
                </DetailedListContainer>
            </ListSubContainer>

            <ListSubContainerRHS>
            <Typography
                    text="Discount"
                    fontSize="14px"
                    color={colorConstants?.primaryBlack}
                    fontWeight="500"
                    lineHeight="16px"
                    style={{marginLeft:".8rem", marginBottom:"1rem"}}
                />
                <Button text="Add Discount" color={colorConstants?.primaryGreen} style={{width:141, height:32}} />
            </ListSubContainerRHS>
        </ListMainContainer>
    )
}

export default ProductList