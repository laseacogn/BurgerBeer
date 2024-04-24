import React, { useState } from "react";
import { Button, Modal } from "flowbite-react";
import { Accordion } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

const Review = () => {
  const [openModal1, setOpenModal1] = useState(true);
  const [openModal2, setOpenModal2] = useState(true);
  

  return (
    <div className="max-w-[1200px] mx-auto no-scrollbar">
      <div className="w-[95%] ml-[30px] bg-white border-b-[1px] border-[#ffffff] mb-2 justify-center items-center">
        <Accordion collapseAll>
          <Accordion.Panel>
            <Accordion.Title>
              <div className="w-full flex justify-center items-center">
                <img
                  className="w-[70px] h-[70px] self-center"
                  style={{ borderRadius: "20px" }}
                  src={require(`../../assets/image/Burger/8.jpg`)}
                  alt=""
                />
                <div className="ml-[40px]">
                  <p className="text-base font-semibold font-sans text-[17px] text-black">
                    Double Cheese Burger
                  </p>
                  <div className="flex text-base font-semibold font-sans text-[15px] mt-[5px]">
                    <p className="">Date: 12/02/2024</p>
                    <p className="ml-[50px] mr-[3px]"> Rating:</p>
                    <img
                      className="w-[80px] h-[20px] mt-[3px]"
                      src={require(`../../assets/image/rating/5.jpg`)}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Double Cheese Burger là một sự kết hợp tuyệt vời giữa hai miếng
                thịt bò tươi ngon và hai lớp phô mai đậm đà, tạo nên một trải
                nghiệm ẩm ướt và ngon miệng không thể cưỡng lại. Vị ngon đặc
                trưng của phô mai tan chảy hòa quện với hương vị đậm đà của thịt
                bò, cùng với độ giòn của bánh mì, tạo nên một món ăn thú vị và
                đầy đặn. Tuy nhiên, sản phẩm này có thể không phù hợp cho những
                ai có hạn chế đạm trong khẩu phần ăn hoặc tuân thực ăn chay.
              </p>
              <div className="flex flex-wrap gap-2">
                <Button
                  className="w-[100px]"
                  color="light"
                  onClick={() => setOpenModal2(true)}
                >
                  Delete
                </Button>
                <Modal show={openModal2} size="md" onClose={() => setOpenModal2(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this product?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="dark" onClick={() => setOpenModal2(false)}>
                {"Yes, I'm sure"}
              </Button>
              <Button color="gray" onClick={() => setOpenModal2(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
                <Button
                  className="w-[100px]"
                  color="light"
                  onClick={() => setOpenModal1(true)}
                >
                  Edit
                </Button>
                <Modal show={openModal1} onClose={() => setOpenModal1(false)}>
                  <Modal.Header>EDIT REVIEW</Modal.Header>
                  <Modal.Body className="space-y-6">
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full"
                    />
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={() => setOpenModal1(false)} color="dark">
                      
                      UPDATE
                    </Button>
                    <Button color="gray" onClick={() => setOpenModal1(false)}>
                      DECLINE
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              <div className="w-full flex justify-center items-center">
                <img
                  className="w-[70px] h-[70px] self-center"
                  style={{ borderRadius: "20px" }}
                  src={require(`../../assets/image/Burger/6.jpg`)}
                  alt=""
                />
                <div className="ml-[40px]">
                  <p className="text-base font-semibold font-sans text-[17px] text-black">
                    BBQ Pulled Pork Burger
                  </p>
                  <div className="flex text-base font-semibold font-sans text-[15px]  mt-[5px]">
                    <p className="">Date: 16/03/2024</p>
                    <p className="ml-[50px] mr-[3px]"> Rating:</p>
                    <img
                      className="w-[80px] h-[20px] mt-[3px]"
                      src={require(`../../assets/image/rating/4.jpg`)}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Burger BBQ Pulled Pork là một sự kết hợp độc đáo giữa thịt lợn
                nướng mềm mại và sốt BBQ thơm ngon, tạo nên một trải nghiệm ẩm
                ướt và đậm đà. Thịt lợn được nấu chậm trong gia vị và sốt BBQ
                cho đến khi mềm và thấm đều, sau đó được đặt lên bánh mì và kèm
                theo các loại rau tươi.
                <br />
                Với vị ngọt của sốt BBQ, vị béo của thịt lợn, và độ giòn của
                rau, mỗi miếng burger đều là một cú hit về hương vị. Đây là lựa
                chọn tuyệt vời cho những người yêu thích thực phẩm BBQ và muốn
                thưởng thức một loại burger độc đáo và đầy đặn. Tuy nhiên, cần
                lưu ý rằng sản phẩm này có thể không phù hợp cho những ai có hạn
                chế đạm trong khẩu phần ăn hoặc tuân thực ăn chay.
              </p>
              <div className="flex flex-wrap gap-2">
                <Button
                  className="w-[100px]"
                  color="light"
                  onClick={() => setOpenModal2(true)}
                >
                  Delete
                </Button>
                <Modal
                  show={openModal2}
                  size="md"
                  onClose={() => setOpenModal2(false)}
                  popup
                >
                  <Modal.Header />
                  <Modal.Body>
                    <div className="text-center">
                      <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                      <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                        Are you sure you want to delete this review?
                      </h3>
                      <div className="flex justify-center gap-4">
                        <Button
                          color="dark"
                          onClick={() => setOpenModal2(false)}
                        >
                          {"Yes, I'm sure"}
                        </Button>
                        <Button
                          color="gray"
                          onClick={() => setOpenModal2(false)}
                        >
                          No, cancel
                        </Button>
                      </div>
                    </div>
                  </Modal.Body>
                </Modal>
                <Button
                  className="w-[100px]"
                  color="light"
                  onClick={() => setOpenModal1(true)}
                >
                  Edit
                </Button>
                <Modal show={openModal1} onClose={() => setOpenModal1(false)}>
                  <Modal.Header>EDIT REVIEW</Modal.Header>
                  <Modal.Body>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full"
                    />
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={() => setOpenModal1(false)} color="dark">
                      UPDATE
                    </Button>
                    <Button color="gray" onClick={() => setOpenModal1(false)}>
                      DECLINE
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </Accordion.Content>
          </Accordion.Panel>

          <Accordion.Panel>
            <Accordion.Title>
              <div className="w-full flex justify-center items-center">
                <img
                  className="w-[70px] h-[70px] self-center"
                  style={{ borderRadius: "20px" }}
                  src={require(`../../assets/image/Burger/12.jpg`)}
                  alt=""
                />
                <div className="ml-[40px]">
                  <p className="text-base font-semibold font-sans text-[17px] text-black">
                    Japanese Chicken Burger
                  </p>
                  <div className="flex text-base font-semibold font-sans text-[15px]  mt-[5px]">
                    <p className="">Date: 18/03/2024</p>
                    <p className="ml-[50px] mr-[3px]"> Rating:</p>
                    <img
                      className="w-[80px] h-[20px] mt-[3px]"
                      src={require(`../../assets/image/rating/3.jpg`)}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Burger gà kiểu Nhật Bản mang đến một sự kết hợp tinh tế giữa
                hương vị truyền thống của Nhật Bản và khẩu vị phương Tây. Thường
                được làm từ thịt gà tươi ngon, burger này thường được nướng hoặc
                chiên và kèm theo các thành phần như xà lách, cà chua, và sốt
                mayonnaise hoặc sốt teriyaki. <br />
                Với vị ngọt dịu của sốt teriyaki và vị béo của thịt gà, burger
                gà kiểu Nhật Bản mang lại một trải nghiệm hương vị đa dạng và
                thú vị. Sự kết hợp giữa các thành phần đặc trưng của Nhật Bản và
                khẩu vị phương Tây tạo ra một burger độc đáo và hấp dẫn.
                <br />
                Đây là lựa chọn tuyệt vời cho những ai muốn thưởng thức hương vị
                mới mẻ và độc đáo trong burger, đồng thời vẫn giữ được sự ngon
                miệng và thú vị.
                <br />
              </p>
              <div className="flex flex-wrap gap-2">
                <Button
                  className="w-[100px]"
                  color="light"
                  onClick={() => setOpenModal2(true)}
                >
                  Delete
                </Button>
                <Modal
                  show={openModal2}
                  size="md"
                  onClose={() => setOpenModal2(false)}
                  popup
                >
                  <Modal.Header />
                  <Modal.Body>
                    <div className="text-center">
                      <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                      <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                        Are you sure you want to delete this review?
                      </h3>
                      <div className="flex justify-center gap-4">
                        <Button
                          color="dark"
                          onClick={() => setOpenModal2(false)}
                        >
                          {"Yes, I'm sure"}
                        </Button>
                        <Button
                          color="gray"
                          onClick={() => setOpenModal2(false)}
                        >
                          No, cancel
                        </Button>
                      </div>
                    </div>
                  </Modal.Body>
                </Modal>
                <Button
                  className="w-[100px]"
                  color="light"
                  onClick={() => setOpenModal1(true)}
                >
                  Edit
                </Button>
                <Modal show={openModal1} onClose={() => setOpenModal1(false)}>
                  <Modal.Header>EDIT REVIEW</Modal.Header>
                  <Modal.Body>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full"
                    />
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={() => setOpenModal1(false)} color="dark">
                      UPDATE
                    </Button>
                    <Button color="gray" onClick={() => setOpenModal1(false)}>
                      DECLINE
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </Accordion.Content>
          </Accordion.Panel>

          <Accordion.Panel>
            <Accordion.Title>
              <div className="w-full flex justify-center items-center">
                <img
                  className="w-[70px] h-[70px] self-center"
                  style={{ borderRadius: "20px" }}
                  src={require(`../../assets/image/Burger/15.jpg`)}
                  alt=""
                />
                <div className="ml-[40px]">
                  <p className="text-base font-semibold font-sans text-[17px] text-black">
                    Bacon & Egg Grilled Cheese Sandwich
                  </p>
                  <div className="flex text-base font-semibold font-sans text-[15px]  mt-[5px]">
                    <p className="">Date: 20/03/2024</p>
                    <p className="ml-[50px] mr-[3px]"> Rating:</p>
                    <img
                      className="w-[80px] h-[20px] mt-[3px]"
                      src={require(`../../assets/image/rating/2.jpg`)}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Bacon & Egg Grilled Cheese Sandwich là một sự kết hợp tuyệt vời
                giữa vị béo ngậy của bơ, vị ngọt của bánh mì nướng giòn và hương
                vị đặc trưng của trứng và thịt ba rội. Khi ba rội được nướng
                giòn và trứng được chiên vừa đủ, chúng được đặt giữa hai lớp phô
                mai tan chảy, tạo ra một trải nghiệm thú vị đầy đặn. <br />
                Với vị béo của bơ và phô mai, kết hợp với hương vị thơm ngon của
                thịt ba rội và lòng trắng trứng, mỗi miếng sandwich là một cú
                hit về hương vị. Đây là một lựa chọn tuyệt vời cho bữa sáng hoặc
                bữa ăn nhẹ, mang lại sự no nê và thỏa mãn vị giác.
                <br />
                Tuy nhiên, cần lưu ý rằng sản phẩm này có thể có lượng calo và
                chất béo cao, vì vậy cần được tiêu thụ với sự cân nhắc đối với
                khẩu phần ăn hàng ngày.
                <br />
              </p>
              <div className="flex flex-wrap gap-2">
                <Button
                  className="w-[100px]"
                  color="light"
                  onClick={() => setOpenModal2(true)}
                >
                  Delete
                </Button>
                <Modal
                  show={openModal2}
                  size="md"
                  onClose={() => setOpenModal2(false)}
                  popup
                >
                  <Modal.Header />
                  <Modal.Body>
                    <div className="text-center">
                      <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                      <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                        Are you sure you want to delete this review?
                      </h3>
                      <div className="flex justify-center gap-4">
                        <Button
                          color="dark"
                          onClick={() => setOpenModal2(false)}
                        >
                          {"Yes, I'm sure"}
                        </Button>
                        <Button
                          color="gray"
                          onClick={() => setOpenModal2(false)}
                        >
                          No, cancel
                        </Button>
                      </div>
                    </div>
                  </Modal.Body>
                </Modal>
                <Button
                  className="w-[100px]"
                  color="light"
                  onClick={() => setOpenModal1(true)}
                >
                  Edit
                </Button>
                <Modal show={openModal1} onClose={() => setOpenModal1(false)}>
                  <Modal.Header>EDIT REVIEW</Modal.Header>
                  <Modal.Body>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full"
                    />
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={() => setOpenModal1(false)} color="dark">
                      UPDATE
                    </Button>
                    <Button color="gray" onClick={() => setOpenModal1(false)}>
                      DECLINE
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </Accordion.Content>
          </Accordion.Panel>

          <Accordion.Panel>
            <Accordion.Title>
              <div className="w-full flex justify-center items-center">
                <img
                  className="w-[70px] h-[70px] self-center"
                  style={{ borderRadius: "20px" }}
                  src={require(`../../assets/image/Burger/4.jpg`)}
                  alt=""
                />
                <div className="ml-[40px]">
                  <p className="text-base font-semibold font-sans text-[17px] text-black">
                    Chicken Nugget
                  </p>
                  <div className="flex text-base font-semibold font-sans text-[15px]  mt-[5px]">
                    <p className="">Date: 24/03/2024</p>
                    <p className="ml-[50px] mr-[3px]"> Rating:</p>
                    <img
                      className="w-[80px] h-[20px] mt-[3px]"
                      src={require(`../../assets/image/rating/5.jpg`)}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Chicken nugget là một loại món ăn phổ biến, được làm từ thịt gà
                cắt nhỏ, bọc với lớp vỏ giòn và sau đó chiên hoặc nướng cho đến
                khi chín vàng và giòn. <br />
                Với vị bên trong là thịt gà mềm mại và hấp dẫn, kết hợp với lớp
                vỏ giòn ngon miệng ở bên ngoài, chicken nugget là một lựa chọn
                ưa thích của nhiều người, đặc biệt là trẻ em.
                <br />
                Chicken nugget thường được kèm theo sốt mayonnaise, sốt BBQ hoặc
                các loại sốt khác để tăng thêm hương vị. Đây là một món ăn nhẹ
                và tiện lợi, thích hợp cho bữa ăn sáng, bữa ăn nhẹ hoặc bữa ăn
                vặt. Tuy nhiên, cần lưu ý rằng chicken nugget có thể chứa một
                lượng chất béo và calo cao, nên cần được tiêu thụ một cách cân
                nhắc khi tính toán khẩu phần ăn hàng ngày.
                <br />
              </p>
              <div className="flex flex-wrap gap-2">
                <Button
                  className="w-[100px]"
                  color="light"
                  onClick={() => setOpenModal2(true)}
                >
                  Delete
                </Button>
                <Modal
                  show={openModal2}
                  size="md"
                  onClose={() => setOpenModal2(false)}
                  popup
                >
                  <Modal.Header />
                  <Modal.Body>
                    <div className="text-center">
                      <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                      <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                        Are you sure you want to delete this review?
                      </h3>
                      <div className="flex justify-center gap-4">
                        <Button
                          color="dark"
                          onClick={() => setOpenModal2(false)}
                        >
                          {"Yes, I'm sure"}
                        </Button>
                        <Button
                          color="gray"
                          onClick={() => setOpenModal2(false)}
                        >
                          No, cancel
                        </Button>
                      </div>
                    </div>
                  </Modal.Body>
                </Modal>
                <Button
                  className="w-[100px]"
                  color="light"
                  onClick={() => setOpenModal1(true)}
                >
                  Edit
                </Button>
                <Modal show={openModal1} onClose={() => setOpenModal1(false)}>
                  <Modal.Header>EDIT REVIEW</Modal.Header>
                  <Modal.Body>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full"
                    />
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={() => setOpenModal1(false)} color="dark">
                      UPDATE
                    </Button>
                    <Button color="gray" onClick={() => setOpenModal1(false)}>
                      DECLINE
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </Accordion.Content>
          </Accordion.Panel>

          <Accordion.Panel>
            <Accordion.Title>
              <div className="w-full flex justify-center items-center">
                <img
                  className="w-[70px] h-[70px] self-center"
                  style={{ borderRadius: "20px" }}
                  src={require(`../../assets/image/Burger/10.jpg`)}
                  alt=""
                />
                <div className="ml-[40px]">
                  <p className="text-base font-semibold font-sans text-[17px] text-black">
                    The Classic Burger
                  </p>
                  <div className="flex text-base font-semibold font-sans text-[15px]  mt-[5px]">
                    <p className="">Date: 12/04/2024</p>
                    <p className="ml-[50px] mr-[3px]"> Rating:</p>
                    <img
                      className="w-[80px] h-[20px] mt-[3px]"
                      src={require(`../../assets/image/rating/5.jpg`)}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                The Classic Burger là biểu tượng của ẩm thực phương Tây, một lựa
                chọn vô cùng quen thuộc và được nhiều người ưa thích trên khắp
                thế giới. Một Classic Burger thường bao gồm một miếng thịt bò
                tươi ngon, được nướng hoặc chiên đến khi chín vàng, và được đặt
                giữa hai miếng bánh mì hamburger. <br />
                Với vị thịt bò mềm mại, đậm đà, kết hợp với các loại rau, cà
                chua, cà rốt và hành tây, mỗi miếng burger là một biểu tượng của
                sự ngon miệng và đa dạng về hương vị. Sự kết hợp giữa thịt bò,
                rau và sốt, thường được kèm theo với phô mai tan chảy, tạo nên
                một trải nghiệm ẩm thực phong phú và thú vị.
                <br />
                The Classic Burger thường được kèm theo các loại sốt như sốt
                mayo, sốt BBQ hoặc mustard để tăng thêm hương vị. Đây là một lựa
                chọn phổ biến cho bữa ăn trưa, tối hoặc bất kỳ dịp tiệc nào, và
                luôn là một món ăn thú vị và đầy đặn.
                <br />
              </p>
              <div className="flex flex-wrap gap-2">
                <Button
                  className="w-[100px]"
                  color="light"
                  onClick={() => setOpenModal2(true)}
                >
                  Delete
                </Button>
                <Modal
                  show={openModal2}
                  size="md"
                  onClose={() => setOpenModal2(false)}
                  popup
                >
                  <Modal.Header />
                  <Modal.Body>
                    <div className="text-center">
                      <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                      <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                        Are you sure you want to delete this review?
                      </h3>
                      <div className="flex justify-center gap-4">
                        <Button
                          color="dark"
                          onClick={() => setOpenModal2(false)}
                        >
                          {"Yes, I'm sure"}
                        </Button>
                        <Button
                          color="gray"
                          onClick={() => setOpenModal2(false)}
                        >
                          No, cancel
                        </Button>
                      </div>
                    </div>
                  </Modal.Body>
                </Modal>
                <Button
                  className="w-[100px]"
                  color="light"
                  onClick={() => setOpenModal1(true)}
                >
                  Edit
                </Button>
                <Modal show={openModal1} onClose={() => setOpenModal1(false)}>
                  <Modal.Header>EDIT REVIEW</Modal.Header>
                  <Modal.Body>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full"
                    />
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={() => setOpenModal1(false)} color="dark">
                      UPDATE
                    </Button>
                    <Button color="gray" onClick={() => setOpenModal1(false)}>
                      DECLINE
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </Accordion.Content>
          </Accordion.Panel>

          
        </Accordion>
      </div>
    </div>
  );
};

export default Review;
