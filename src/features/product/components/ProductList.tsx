import React, {useEffect} from 'react';


import {useState} from 'react'
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
} from '@headlessui/react'
import {XMarkIcon} from '@heroicons/react/24/outline'
import {ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon, StarIcon} from '@heroicons/react/20/solid'
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/16/solid";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllProductsAsync, fetchProductsByFilterAsync, selectAllProducts} from "../ProductSlice";
import {Filter, FilterOption, FilterParams, SortOption} from "../../../utils/types";

const sortOptions:SortOption[] = [
    {name: 'Most Popular', href: '#', current: true},
    {name: 'Best Rating', href: '#', current: false},
    {name: 'Newest', href: '#', current: false},
    {name: 'Price: Low to High', href: '#', current: false},
    {name: 'Price: High to Low', href: '#', current: false},
]

const filters:Filter[] = [
    {
        id: 'category',
        name: 'Category',
        options: [
            {value: 'beauty', label: 'beauty', checked: false},
            {value: 'fragrances', label: 'fragrances', checked: false},
            {value: 'furniture', label: 'furniture', checked: false},
            {value: 'groceries', label: 'groceries', checked: false},
            {value: 'home-decoration', label: 'home-decoration', checked: false},
            {value: 'kitchen-accessories', label: 'kitchen-accessories', checked: false},
            {value: 'laptops', label: 'laptops', checked: false},
            {value: 'mens-shirts', label: 'mens-shirts', checked: false},
            {value: 'mens-shoes', label: 'mens-shoes', checked: false},
            {value: 'mens-watches', label: 'mens-watches', checked: false},
            {value: 'mobile-accessories', label: 'mobile-accessories', checked: false}
        ],
    },
    {
        id: 'brand',
        name: 'Brand',
        options: [
            {value: 'Essence', label: 'Essence', checked: false},
            {value: 'Glamour-Beauty', label: 'Glamour-Beauty', checked: false},
            {value: 'Velvet-Touch', label: 'Velvet-Touch', checked: false},
            {value: 'Chic-Cosmetics', label: 'Chic-Cosmetics', checked: false},
            {value: 'Nail-Couture', label: 'Nail-Couture', checked: false},
            {value: 'Calvin-Klein', label: 'Calvin-Klein', checked: false},
            {value: 'Chanel', label: 'Chanel', checked: false},
            {value: 'Dior', label: 'Dior', checked: false},
            {value: 'Dolce-&-Gabbana', label: 'Dolce-&-Gabbana', checked: false},
            {value: 'Gucci', label: 'Gucci', checked: false},
            {value: 'Annibale-Colombo', label: 'Annibale-Colombo', checked: false},
            {value: 'Furniture-Co.', label: 'Furniture-Co.', checked: false},
            {value: 'Knoll', label: 'Knoll', checked: false},
            {value: 'Bath-Trends', label: 'Bath-Trends', checked: false},
            {value: 'Apple', label: 'Apple', checked: false},
            {value: 'Asus', label: 'Asus', checked: false},
            {value: 'Huawei', label: 'Huawei', checked: false},
            {value: 'Lenovo', label: 'Lenovo', checked: false},
            {value: 'Dell', label: 'Dell', checked: false},
            {value: 'Fashion-Trends', label: 'Fashion-Trends', checked: false},
            {value: 'Gigabyte', label: 'Gigabyte', checked: false},
            {value: 'Classic-Wear', label: 'Classic-Wear', checked: false},
            {value: 'Casual-Comfort', label: 'Casual-Comfort', checked: false},
            {value: 'Urban-Chic', label: 'Urban-Chic', checked: false},
            {value: 'Nike', label: 'Nike', checked: false},
            {value: 'Puma', label: 'Puma', checked: false},
            {value: 'Off-White', label: 'Off-White', checked: false},
            {value: 'Fashion-Timepieces', label: 'Fashion-Timepieces', checked: false},
            {value: 'Longines', label: 'Longines', checked: false},
            {value: 'Rolex', label: 'Rolex', checked: false},
            {value: 'Amazon', label: 'Amazon', checked: false}
        ],
    },
]

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}


const ProductList = () => {

    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
    const dispatch = useDispatch();
    const products = useSelector(selectAllProducts);
    const [filter,setFilter] = useState<FilterParams[]>([]);

    useEffect(() => {
        dispatch<any>(fetchAllProductsAsync())
    }, [dispatch]);


    const handleFilter = (event:React.ChangeEvent<HTMLInputElement>,section:Filter,option:FilterOption) => {
        const newFilter = {...filter, [section.id]:option.value};
        setFilter(newFilter);
        dispatch<any>(fetchProductsByFilterAsync(newFilter))

    }

    return (
        <div className="bg-white">
            <div>
                {/* Mobile filter dialog */}
                <Dialog open={mobileFiltersOpen} onClose={setMobileFiltersOpen} className="relative z-40 lg:hidden">
                    <DialogBackdrop
                        transition
                        className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
                    />

                    <div className="fixed inset-0 z-40 flex">
                        <DialogPanel
                            transition
                            className="relative ml-auto flex h-full w-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
                        >
                            <div className="flex items-center justify-between px-4">
                                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                                <button
                                    type="button"
                                    onClick={() => setMobileFiltersOpen(false)}
                                    className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                                >
                                    <span className="sr-only">Close menu</span>
                                    <XMarkIcon aria-hidden="true" className="h-6 w-6"/>
                                </button>
                            </div>

                            {/* Filters */}
                            <form className="mt-4 border-t border-gray-200">

                                {filters.map((section) => (
                                    <Disclosure key={section.id} as="div"
                                                className="border-t border-gray-200 px-4 py-6">
                                        <h3 className="-mx-2 -my-3 flow-root">
                                            <DisclosureButton
                                                className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                                <span className="font-medium text-gray-900">{section.name}</span>
                                                <span className="ml-6 flex items-center">
                          <PlusIcon aria-hidden="true" className="h-5 w-5 group-data-[open]:hidden"/>
                          <MinusIcon aria-hidden="true" className="h-5 w-5 [.group:not([data-open])_&]:hidden"/>
                        </span>
                                            </DisclosureButton>
                                        </h3>
                                        <DisclosurePanel className="pt-6">
                                            <div className="space-y-6">
                                                {section.options.map((option, optionIdx) => (
                                                    <div key={option.value} className="flex items-center">
                                                        <input
                                                            defaultValue={option.value}
                                                            defaultChecked={option.checked}
                                                            id={`filter-mobile-${section.id}-${optionIdx}`}
                                                            name={`${section.id}[]`}
                                                            type="checkbox"
                                                            onChange={(event) => {
                                                                return handleFilter(event,section,option);
                                                            }}
                                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                        />
                                                        <label
                                                            htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                                            className="ml-3 min-w-0 flex-1 text-gray-500"
                                                        >
                                                            {option.label}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        </DisclosurePanel>
                                    </Disclosure>
                                ))}
                            </form>
                        </DialogPanel>
                    </div>
                </Dialog>

                <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900">All Products</h1>

                        <div className="flex items-center">
                            <Menu as="div" className="relative inline-block text-left">
                                <div>
                                    <MenuButton
                                        className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                                        Sort
                                        <ChevronDownIcon
                                            aria-hidden="true"
                                            className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                        />
                                    </MenuButton>
                                </div>

                                <MenuItems
                                    transition
                                    className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                >
                                    <div className="py-1">
                                        {sortOptions.map((option) => (
                                            <MenuItem key={option.name}>
                                                <a
                                                    href={option.href}
                                                    className={classNames(
                                                        option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                                        'block px-4 py-2 text-sm data-[focus]:bg-gray-100',
                                                    )}
                                                >
                                                    {option.name}
                                                </a>
                                            </MenuItem>
                                        ))}
                                    </div>
                                </MenuItems>
                            </Menu>

                            <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                                <span className="sr-only">View grid</span>
                                <Squares2X2Icon aria-hidden="true" className="h-5 w-5"/>
                            </button>
                            <button
                                type="button"
                                onClick={() => setMobileFiltersOpen(true)}
                                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                            >
                                <span className="sr-only">Filters</span>
                                <FunnelIcon aria-hidden="true" className="h-5 w-5"/>
                            </button>
                        </div>
                    </div>

                    <section aria-labelledby="products-heading" className="pb-24 pt-6">
                        <h2 id="products-heading" className="sr-only">
                            Products
                        </h2>

                        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                            {/* Filters */}
                            <form className="hidden lg:block">

                                {filters.map((section) => (
                                    <Disclosure key={section.id} as="div" className="border-b border-gray-200 py-6">
                                        <h3 className="-my-3 flow-root">
                                            <DisclosureButton
                                                className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                                <span className="font-medium text-gray-900">{section.name}</span>
                                                <span className="ml-6 flex items-center">
                          <PlusIcon aria-hidden="true" className="h-5 w-5 group-data-[open]:hidden"/>
                          <MinusIcon aria-hidden="true" className="h-5 w-5 [.group:not([data-open])_&]:hidden"/>
                        </span>
                                            </DisclosureButton>
                                        </h3>
                                        <DisclosurePanel className="pt-6">
                                            <div className="space-y-4">
                                                {section.options.map((option, optionIdx) => (
                                                    <div key={option.value} className="flex items-center">
                                                        <input
                                                            defaultValue={option.value}
                                                            defaultChecked={option.checked}
                                                            id={`filter-${section.id}-${optionIdx}`}
                                                            name={`${section.id}[]`}
                                                            type="checkbox"
                                                            onChange={(event) => {
                                                                return handleFilter(event,section,option);
                                                            }}
                                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                        />
                                                        <label htmlFor={`filter-${section.id}-${optionIdx}`}
                                                               className="ml-3 text-sm text-gray-600">
                                                            {option.label}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        </DisclosurePanel>
                                    </Disclosure>
                                ))}
                            </form>

                            {/* Product grid */}
                            <div className="lg:col-span-3">

                                { /* Product List */}
                                <div className="bg-white">
                                    <div className="mx-auto max-w-2xl px-4 py-0 sm:px-6 sm:py-0 lg:max-w-7xl lg:px-8">
                                        <div
                                            className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                                            {products.map((product) => {

                                                const discount_price = ((product.price) - ((product.price * product.discountPercentage) / 100)).toFixed(2);

                                                return (
                                                    <Link to={"/product-detail"} key={product.id}>
                                                        <div className="group relative">
                                                            <div
                                                                className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                                                <img
                                                                    alt={product.imageAlt}
                                                                    src={product.imageSrc[0]}
                                                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                                                />
                                                            </div>
                                                            <div className="mt-4 flex justify-between">
                                                                <div>
                                                                    <h3 className="text-sm text-gray-700 font-medium">
                                                                    <span aria-hidden="true"
                                                                          className="absolute inset-0"/>
                                                                        {product.name}
                                                                    </h3>
                                                                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                                                </div>
                                                                <div className={"flex flex-col mt-1 justify-start"}>
                                                                    <p className="text-sm font-medium text-gray-900">${discount_price}</p>
                                                                    <p className={"text-sm font-medium text-gray-600 line-through"}>${product.price}</p>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className={"text-gray-600 font-normal flex flex-row justify-start items-center gap-2"}>
                                                                <StarIcon width={18} height={18}
                                                                          color={"#FFD700"}/> {product.rating}
                                                            </div>
                                                        </div>
                                                    </Link>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>

                    {/* Pagination*/}

                    <div
                        className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-10 sm:px-6">
                        <div className="flex flex-1 justify-between sm:hidden">
                            <a
                                href="#"
                                className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                            >
                                Previous
                            </a>
                            <a
                                href="#"
                                className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                            >
                                Next
                            </a>
                        </div>
                        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                            <div>
                                <p className="text-sm text-gray-700">
                                    Showing <span className="font-medium">1</span> to <span
                                    className="font-medium">10</span> of{' '}
                                    <span className="font-medium">97</span> results
                                </p>
                            </div>
                            <div>
                                <nav aria-label="Pagination"
                                     className="isolate inline-flex -space-x-px rounded-md shadow-sm">
                                    <a
                                        href="#"
                                        className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                    >
                                        <span className="sr-only">Previous</span>
                                        <ChevronLeftIcon aria-hidden="true" className="h-5 w-5"/>
                                    </a>
                                    {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
                                    <a
                                        href="#"
                                        aria-current="page"
                                        className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        1
                                    </a>
                                    <a
                                        href="#"
                                        className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                    >
                                        2
                                    </a>
                                    <a
                                        href="#"
                                        className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                                    >
                                        3
                                    </a>
                                    <span
                                        className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">...</span>
                                    <a
                                        href="#"
                                        className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                                    >
                                        8
                                    </a>
                                    <a
                                        href="#"
                                        className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                    >
                                        9
                                    </a>
                                    <a
                                        href="#"
                                        className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                    >
                                        10
                                    </a>
                                    <a
                                        href="#"
                                        className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                    >
                                        <span className="sr-only">Next</span>
                                        <ChevronRightIcon aria-hidden="true" className="h-5 w-5"/>
                                    </a>
                                </nav>
                            </div>
                        </div>
                    </div>

                </main>
            </div>
        </div>
    )


};

export default ProductList;
