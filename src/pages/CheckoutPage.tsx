import React from 'react';
import {PhotoIcon, UserCircleIcon} from "@heroicons/react/16/solid";


const products = [
    {
        id: 1,
        name: 'Zip Tote Basket',
        href: '#',
        color: 'White and black',
        price: '$140.00',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-03.jpg',
        imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    },
    {
        id: 2,
        name: 'Throwback Hip Bag',
        href: '#',
        color: 'Salmon',
        price: '$90.00',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
        imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    },
    // More products...
]

const CheckoutPage = () => {

    return (
        <form>
            <div className="space-y-12 mx-auto px-10 max-w-4xl">
                <div className={"flex flex-col sm:flex-row gap-16 justify-between"}>
                    <div className={"flex-1"}>
                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
                            <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can
                                receive
                                mail.</p>

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                    <label htmlFor="first-name"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        First name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="first-name"
                                            name="first-name"
                                            type="text"
                                            autoComplete="given-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="last-name"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        Last name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="last-name"
                                            name="last-name"
                                            type="text"
                                            autoComplete="family-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-4">
                                    <label htmlFor="email"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        Email address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="country"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        Country
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            id="country"
                                            name="country"
                                            autoComplete="country-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                        >
                                            <option>United States</option>
                                            <option>Canada</option>
                                            <option>Mexico</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="street-address"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        Street address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="street-address"
                                            name="street-address"
                                            type="text"
                                            autoComplete="street-address"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2 sm:col-start-1">
                                    <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                                        City
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="city"
                                            name="city"
                                            type="text"
                                            autoComplete="address-level2"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="region"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        State / Province
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="region"
                                            name="region"
                                            type="text"
                                            autoComplete="address-level1"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="postal-code"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        ZIP / Postal code
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="postal-code"
                                            name="postal-code"
                                            type="text"
                                            autoComplete="postal-code"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-base font-semibold leading-7 text-gray-900">Address</h2>
                            <p className="mt-1 text-sm leading-6 text-gray-600">
                                Choose from Existing addresses
                            </p>

                            <div className="mt-6 space-y-10">
                                <fieldset>
                                    <div className="space-y-6">
                                        <div
                                            className="relative flex flex-col sm:flex-row justify-between items-start gap-x-3">
                                            <div className="flex flex-col justify-between items-start gap-2">
                                                <h4 className={"text-gray-700 font-semibold"}>John wick</h4>
                                                <p className={"text-gray-500 text-sm font-medium"}>11th Main</p>
                                                <p className={"text-gray-500 text-sm font-medium"}>110001</p>
                                            </div>
                                            <div
                                                className="flex flex-col justify-between items-start mt-2 sm:mt-0 sm:items-end gap-2">
                                                <p className={"text-gray-600 font-medium"}>Phone: <span
                                                    className={"text-gray-600 font-medium"}>1234567890</span></p>
                                                <p className={"text-sm text-gray-500 font-medium"}>Delhi</p>
                                            </div>
                                        </div>
                                        <div
                                            className="relative flex flex-col sm:flex-row justify-between items-start gap-x-3">
                                            <div className="flex flex-col justify-between items-start gap-2">
                                                <h4 className={"text-gray-700 font-semibold"}>Brijesh Mourya</h4>
                                                <p className={"text-gray-500 text-sm font-medium"}>Sirsi Gandhi basti
                                                    jaipur</p>
                                                <p className={"text-gray-500 text-sm font-medium"}>302012</p>
                                            </div>
                                            <div
                                                className="flex flex-col justify-between items-start mt-2 sm:mt-0 sm:items-end gap-2">
                                                <p className={"text-gray-600 font-medium"}>Phone: <span
                                                    className={"text-gray-600 font-medium"}>+91 9521844332</span></p>
                                                <p className={"text-sm text-gray-500 font-medium"}>Jaipur</p>
                                            </div>
                                        </div>

                                    </div>
                                </fieldset>
                                <fieldset>
                                    <legend className="text-sm font-semibold leading-6 text-gray-900">Payment Methods
                                    </legend>
                                    <p className="mt-1 text-sm leading-6 text-gray-600">Choose One</p>
                                    <div className="mt-6 space-y-6">
                                        <div className="flex items-center gap-x-3">
                                            <input
                                                id="cash_payment"
                                                name="payment"
                                                type="radio"
                                                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                            />
                                            <label htmlFor="cash_payment"
                                                   className="block text-sm font-medium leading-6 text-gray-900">
                                                Cash
                                            </label>
                                        </div>
                                        <div className="flex items-center gap-x-3">
                                            <input
                                                id="card_payment"
                                                name="payment"
                                                type="radio"
                                                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                            />
                                            <label htmlFor="card_payment"
                                                   className="block text-sm font-medium leading-6 text-gray-900">
                                                Card Payment
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                        </div>
                    </div>

                    {/*    Cart*/}
                    <div
                        className="flex-1 flex text-base text-left transform transition w-full sm:inline-block max-w-3xl sm:my-8 sm:align-middle">
                        <form
                            className="w-full relative flex flex-col bg-white pt-6 pb-8 overflow-hidden sm:pb-6 sm:rounded-lg lg:py-8">
                            <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8">
                                <h2 className="text-lg font-medium text-gray-900">Shopping Cart</h2>
                                {/*<button type="button" className="text-gray-400 hover:text-gray-500"*/}
                                {/*        onClick={() => setOpen(false)}>*/}
                                {/*    <span className="sr-only">Close</span>*/}
                                {/*    <XIcon className="h-6 w-6" aria-hidden="true"/>*/}
                                {/*</button>*/}
                            </div>

                            <section aria-labelledby="cart-heading">
                                <h2 id="cart-heading" className="sr-only">
                                    Items in your shopping cart
                                </h2>

                                <ul role="list" className="divide-y divide-gray-200 px-4 sm:px-6 lg:px-8">
                                    {products.map((product, productIdx) => (
                                        <li key={product.id} className="py-8 flex text-sm sm:items-center">
                                            <img
                                                src={product.imageSrc}
                                                alt={product.imageAlt}
                                                className="flex-none w-24 h-24 rounded-lg border border-gray-200 sm:w-32 sm:h-32"
                                            />
                                            <div
                                                className="ml-4 flex-auto grid gap-y-3 gap-x-5 grid-rows-1 grid-cols-1 items-start sm:ml-6 sm:flex sm:gap-0 sm:items-center">
                                                <div className="flex-auto row-end-1 sm:pr-6">
                                                    <h3 className="font-medium text-gray-900">
                                                        <a href={product.href}>{product.name}</a>
                                                    </h3>
                                                    <p className="mt-1 text-gray-500">{product.color}</p>
                                                </div>
                                                <p className="row-end-2 row-span-2 font-medium text-gray-900 sm:ml-6 sm:order-1 sm:flex-none sm:w-1/3 sm:text-right">
                                                    {product.price}
                                                </p>
                                                <div className="flex items-center sm:flex-none sm:block sm:text-center">
                                                    <label htmlFor={`quantity-${productIdx}`} className="sr-only">
                                                        Quantity, {product.name}
                                                    </label>
                                                    <select
                                                        id={`quantity-${productIdx}`}
                                                        name={`quantity-${productIdx}`}
                                                        className="block max-w-full rounded-md border border-gray-300 py-1.5 text-base leading-5 font-medium text-gray-700 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                    >
                                                        <option value={1}>1</option>
                                                        <option value={2}>2</option>
                                                        <option value={3}>3</option>
                                                        <option value={4}>4</option>
                                                        <option value={5}>5</option>
                                                        <option value={6}>6</option>
                                                        <option value={7}>7</option>
                                                        <option value={8}>8</option>
                                                    </select>

                                                    <button
                                                        type="button"
                                                        className="ml-4 font-medium text-indigo-600 hover:text-indigo-500 sm:ml-0 sm:mt-2"
                                                    >
                                                        <span>Remove</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            <section aria-labelledby="summary-heading" className="mt-auto sm:px-6 lg:px-8">
                                <div className="bg-gray-50 p-6 sm:p-8 sm:rounded-lg">
                                    <h2 id="summary-heading" className="sr-only">
                                        Order summary
                                    </h2>

                                    <div className="flow-root">
                                        <dl className="-my-4 text-sm divide-y divide-gray-200">
                                            <div className="py-4 flex items-center justify-between">
                                                <dt className="text-gray-600">Subtotal</dt>
                                                <dd className="font-medium text-gray-900">$262.00</dd>
                                            </div>
                                            <div className="py-4 flex items-center justify-between">
                                                <dt className="text-gray-600">Shipping</dt>
                                                <dd className="font-medium text-gray-900">$5.00</dd>
                                            </div>
                                            <div className="py-4 flex items-center justify-between">
                                                <dt className="text-gray-600">Tax</dt>
                                                <dd className="font-medium text-gray-900">$53.40</dd>
                                            </div>
                                            <div className="py-4 flex items-center justify-between">
                                                <dt className="text-base font-medium text-gray-900">Order total</dt>
                                                <dd className="text-base font-medium text-gray-900">$320.40</dd>
                                            </div>
                                        </dl>
                                    </div>
                                </div>
                            </section>

                            <div className="mt-8 flex justify-end px-4 sm:px-6 lg:px-8">
                                <button
                                    type="submit"
                                    className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                                >
                                    Continue to Payment
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {
                /*
            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                    Cancel
                </button>
                <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Save
                </button>
            </div>
            */

            }
        </form>
    )
};

export default CheckoutPage;
