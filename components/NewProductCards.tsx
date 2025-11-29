const imgMediaBgCover = "/media-bg-cover.png";
const imgFixedHeight = "/fixed-height.png";
const imgFixedHeight1 = "/fixed-height-1.png";
const imgFixedHeight2 = "/fixed-height-2.png";
const img = "/arrow-left.svg";
const img1 = "/arrow-right.svg";

interface ProductCardProps {
  imageSrc: string;
  productName: string;
  department: string;
  oldPrice: string;
  newPrice: string;
}

function ProductCard({ imageSrc, productName, department, oldPrice, newPrice }: ProductCardProps) {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[183px]">
      <div className="h-[162px] overflow-clip relative shrink-0 w-full">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imageSrc} />
      </div>
      <div className="box-border content-stretch flex flex-col gap-[10px] items-center overflow-clip pb-[35px] pt-[25px] px-[25px] relative shrink-0 w-full">
        <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#252b42] text-[16px] text-center tracking-[0.1px] w-[131px] whitespace-pre-wrap">
          {productName}
        </p>
        <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[14px] text-center text-neutral-500 tracking-[0.2px]">
          {department}
        </p>
        <div className="box-border content-stretch flex font-['Montserrat:Bold',sans-serif] font-bold gap-[5px] items-start leading-[24px] px-[3px] py-[5px] relative shrink-0 text-[16px] text-center tracking-[0.1px] whitespace-pre-wrap">
          <p className="relative shrink-0 text-[#bdbdbd] w-[52px]">
            {oldPrice}
          </p>
          <p className="relative shrink-0 text-[#23856d] w-[45px]">
            {newPrice}
          </p>
        </div>
      </div>
    </div>
  );
}


export default function NewProductCards() {
  return (
    <div className="bg-white relative size-full" data-name="new-product-cards" data-node-id="0:627">
      <div className="absolute box-border content-stretch flex gap-[30px] items-start left-[220px] px-0 py-[48px] top-0" data-name="row" data-node-id="0:628">
        <div className="content-stretch flex flex-col gap-[48px] items-start overflow-clip relative shrink-0" data-name="col-md-4" data-node-id="0:629">
          <div className="bg-white border border-[#8ec2f2] border-solid h-[796px] relative shrink-0 w-[389px]" data-name="card-item" data-node-id="0:630">
            <div className="h-[796px] overflow-clip relative rounded-[inherit] w-[389px]">
              <div className="absolute inset-0 overflow-clip" data-name="media bg-cover" data-node-id="0:631">
                <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMediaBgCover} />
              </div>
              <div className="absolute box-border content-stretch flex flex-col font-['Montserrat:Bold',sans-serif] font-bold gap-[5px] items-start justify-center leading-[24px] left-0 overflow-clip pl-[48px] pr-[24px] py-[24px] right-0 text-[14px] top-0 tracking-[0.2px]" data-name="card-content" data-node-id="0:632">
                <p className="relative shrink-0 text-[#252b42]" data-node-id="0:633">
                  FURNITURE
                </p>
                <p className="relative shrink-0 text-neutral-500" data-node-id="0:634">
                  5 Items
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="col-lg-8" data-node-id="0:635">
          <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0" data-name="container" data-node-id="0:636">
            <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="row" data-node-id="0:637">
              <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0 w-[214px]" data-name="main-content" data-node-id="0:638">
                <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#252b42] text-[16px] text-center tracking-[0.1px]" data-node-id="0:639">
                  NEW PRODUCTS
                </p>
              </div>
              <div className="h-[50px] overflow-clip relative shrink-0 w-[444px]" data-name="navbar-style-3 navbar-light" data-node-id="0:640">
                <div className="absolute content-stretch flex items-start left-[0.5px] overflow-clip top-[0.5px]" data-name="nav" data-node-id="0:641">
                  <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0" data-name="li" data-node-id="0:642">
                    <div className="box-border content-stretch flex flex-col gap-[10px] items-center overflow-clip px-[20px] py-[10px] relative rounded-[5px] shrink-0" data-name="button Sm" data-node-id="0:643">
                      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#23a6f0] text-[14px] text-center tracking-[0.2px]" data-node-id="I0:643;2279:350">
                        Men
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0" data-name="li" data-node-id="0:644">
                    <div className="box-border content-stretch flex flex-col gap-[10px] items-center overflow-clip px-[20px] py-[10px] relative rounded-[37px] shrink-0" data-name="button Sm" data-node-id="0:645">
                      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[14px] text-center text-neutral-500 tracking-[0.2px]" data-node-id="I0:645;2279:377">
                        Women
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0" data-name="li" data-node-id="0:646">
                    <div className="box-border content-stretch flex flex-col gap-[10px] items-center overflow-clip px-[20px] py-[10px] relative rounded-[37px] shrink-0" data-name="button Sm" data-node-id="0:647">
                      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[14px] text-center text-neutral-500 tracking-[0.2px]" data-node-id="I0:647;2279:377">
                        Accessories
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute content-stretch flex gap-[15px] items-start overflow-clip right-[0.79px] top-px" data-name="nav" data-node-id="0:648">
                  <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0" data-name="li" data-node-id="0:649">
                    <div className="border border-[#bdbdbd] border-solid h-[48px] relative rounded-[34px] shrink-0" data-name="button Sm" data-node-id="0:650">
                      <div className="box-border content-stretch flex h-[48px] items-center overflow-clip px-[20px] py-[14px] relative rounded-[inherit]">
                        <div className="flex items-center justify-center relative shrink-0">
                          <div className="flex-none rotate-[180deg]">
                            <div className="h-[15px] relative w-[8.571px]" data-name="icn arrow-left .icn-xs" data-node-id="I0:650;2279:371">
                              <img alt="" className="block max-w-none size-full" src={img} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[10px] h-[49px] items-start overflow-clip relative shrink-0" data-name="li" data-node-id="0:651">
                    <div className="border border-neutral-500 border-solid h-[49px] relative rounded-[33px] shrink-0" data-name="button Sm" data-node-id="0:652">
                      <div className="box-border content-stretch flex h-[49px] items-center overflow-clip px-[20px] py-[14px] relative rounded-[inherit]">
                        <div className="h-[16px] relative shrink-0 w-[9.143px]" data-name="icn arrow-right .icn-xs" data-node-id="I0:652;2279:374">
                          <img alt="" className="block max-w-none size-full" src={img1} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#ececec] h-[2px] shrink-0 w-[658px]" data-node-id="0:653" />
            <div className="content-stretch flex gap-[30px] items-start justify-center relative shrink-0" data-name="row" data-node-id="0:654">
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="product tab tab group" data-node-id="0:655">
                <div className="box-border content-stretch flex flex-col gap-[19px] items-start overflow-clip px-0 py-[8px] relative shrink-0" data-name="tab-content" data-node-id="0:656">
                  <div className="box-border content-stretch flex flex-col gap-[15px] items-start overflow-clip p-[24px] relative shrink-0" data-name="tab-one" data-node-id="0:657">
                    <div className="content-stretch flex gap-[30px] items-start relative shrink-0" data-name="row" data-node-id="0:658">
                      <ProductCard
                        imageSrc={imgFixedHeight}
                        productName="Graphic Design"
                        department="English Department"
                        oldPrice="$16.48"
                        newPrice="$6.48"
                      />
                      <ProductCard
                        imageSrc={imgFixedHeight1}
                        productName="Graphic Design"
                        department="English Department"
                        oldPrice="$16.48"
                        newPrice="$6.48"
                      />
                      <ProductCard
                        imageSrc={imgFixedHeight2}
                        productName="Graphic Design"
                        department="English Department"
                        oldPrice="$16.48"
                        newPrice="$6.48"
                      />
                    </div>
                    <div className="content-stretch flex gap-[30px] items-start relative shrink-0" data-name="row" data-node-id="0:686">
                      <ProductCard
                        imageSrc={imgFixedHeight}
                        productName="Graphic Design"
                        department="English Department"
                        oldPrice="$16.48"
                        newPrice="$6.48"
                      />
                      <ProductCard
                        imageSrc={imgFixedHeight1}
                        productName="Graphic Design"
                        department="English Department"
                        oldPrice="$16.48"
                        newPrice="$6.48"
                      />
                      <ProductCard
                        imageSrc={imgFixedHeight2}
                        productName="Graphic Design"
                        department="English Department"
                        oldPrice="$16.48"
                        newPrice="$6.48"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}