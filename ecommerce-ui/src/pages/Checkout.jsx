import React from "react";

const Checkout = () => {
  return (
    <>
      <div className="checkout-section my-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-semibold mb-12">Billing details</h1>
          <div className="grid grid-cols-12 gap-10">
            <div className="blilingform col-span-7">
              <form action="" method="post">
                <div className="grid grid-cols-2 gap-5">
                  <div className="input-group mb-5">
                    <label htmlFor="fname" className="mb-3 block">
                      First Name <sup className="text-red-500">*</sup>
                    </label>
                    <input
                      type="text"
                      name="fname"
                      id="fname"
                      required
                      className="w-full border rounded-xl p-2 focus-visible:outline-none focus:shadow-form-shadow"
                    />
                  </div>
                  <div className="input-group mb-5">
                    <label htmlFor="lname" className="mb-3 block">
                      Last Name <sup className="text-red-500">*</sup>
                    </label>
                    <input
                      type="text"
                      name="lname"
                      id="lname"
                      required
                      className="w-full border rounded-xl p-2 focus-visible:outline-none focus:shadow-form-shadow"
                    />
                  </div>
                </div>
                <div className="input-group mb-5">
                  <label htmlFor="companyname" className="mb-3 block">
                    Company Name <sup className="text-red-500">*</sup>
                  </label>
                  <input
                    type="text"
                    name="companyname"
                    id="companyname"
                    required
                    className="w-full border rounded-xl p-2 focus-visible:outline-none focus:shadow-form-shadow"
                  />
                </div>
                <div className="input-group mb-5">
                  <label htmlFor="companyname" className="mb-3 block">
                    Address <sup className="text-red-500">*</sup>
                  </label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    required
                    placeholder="House Number Street Number"
                    className="w-full border rounded-xl p-2 focus-visible:outline-none focus:shadow-form-shadow"
                  />
                </div>
                <div className="input-group mb-5">
                  <label htmlFor="town" className="mb-3 block">
                    Town/City <sup className="text-red-500">*</sup>
                  </label>
                  <input
                    type="text"
                    name="town"
                    id="town"
                    required
                    className="w-full border rounded-xl p-2 focus-visible:outline-none focus:shadow-form-shadow"
                  />
                </div>
                <div className="input-group mb-5">
                  <label htmlFor="country" className="mb-3 block">
                    Country <sup className="text-red-500">*</sup>
                  </label>
                  <input
                    type="text"
                    name="country"
                    id="country"
                    required
                    className="w-full border rounded-xl p-2 focus-visible:outline-none focus:shadow-form-shadow"
                  />
                </div>
                <div className="input-group mb-5">
                  <label htmlFor="postcode" className="mb-3 block">
                    Postcode/Zip <sup className="text-red-500">*</sup>
                  </label>
                  <input
                    type="text"
                    name="postcode"
                    id="postcode"
                    required
                    className="w-full border rounded-xl p-2 focus-visible:outline-none focus:shadow-form-shadow"
                  />
                </div>
                <div className="input-group mb-5">
                  <label htmlFor="country" className="mb-3 block">
                    Mobile <sup className="text-red-500">*</sup>
                  </label>
                  <input
                    type="text"
                    name="mobile"
                    id="mobile"
                    required
                    className="w-full border rounded-xl p-2 focus-visible:outline-none focus:shadow-form-shadow"
                  />
                </div>
                <div className="input-group mb-5">
                  <label htmlFor="email" className="mb-3 block">
                    Email Address <sup className="text-red-500">*</sup>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="w-full border rounded-xl p-2 focus-visible:outline-none focus:shadow-form-shadow"
                  />
                </div>
                <div className="input-check-group mb-5 flex items-baseline gap-2 border-b">
                  <input
                    type="checkbox"
                    name="create-account"
                    id="checkbox"
                    required
                    className="w-[1rem] checked:bg-[url('images/checked.svg')] bg-center rounded-sm border p-2 focus-visible:outline-none focus:shadow-form-shadow checked:bg-default-green appearance-none"
                  />
                  <label htmlFor="create-account" className="mb-3 block">
                    Create an account?
                  </label>
                </div>
                <div className="input-check-group mb-5 flex items-baseline gap-2">
                  <input
                    type="checkbox"
                    name="shipping"
                    id="checkbox"
                    required
                    className="w-[1rem] checked:bg-[url('images/checked.svg')] bg-center rounded-sm border p-2 focus-visible:outline-none focus:shadow-form-shadow checked:bg-default-green appearance-none"
                  />
                  <label htmlFor="shipping" className="mb-3 block">
                    Ship to a different address?
                  </label>
                </div>
                <div className="input-group mb-10">
                  <textarea
                    name="ordernote"
                    id="ordernote"
                    cols={30}
                    rows={8}
                    placeholder="Order Notes (Optional)"
                    className="w-full border rounded-xl p-2 focus-visible:outline-none focus:shadow-form-shadow"
                  />
                </div>
              </form>
            </div>
            <div className="col-span-5">this.props.first</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
