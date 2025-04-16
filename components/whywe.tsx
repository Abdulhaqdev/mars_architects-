import axios from 'axios'
import { ArrowRight, Award, Star, Users } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from './ui/carousel'
import { Card, CardContent } from './ui/card'

function Whywe() {
	interface Post {
		id: number
		title: string
		description: string
		image: string
		date: string
	}

	type Posts = Post[]

	const [posts, setPosts] = useState<Posts>([])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get(
					'https://api.mars-architects.us/publications/publications/'
				)
				setPosts(res.data.data)
				// console.log(res.data.data)
			} catch (error) {
				console.error('Error fetching footer data:', error)
			}
		}
		fetchData()
	}, [])
	return (
		<div className='bg-white'>
			{' '}
			<section className='relative container text-white py-16'>
				<div className='absolute inset-0 z-0 md:w-12/12 mx-auto h-2/5  md:h-3/5 mt-12'>
					<Image
						src='/whyus.png'
						alt='Planet background'
						fill
						priority
						className='object-cover'
					/>
				</div>{' '}
				<div className='relative z-10'>
					<div className='max-w-5xl mx-auto space-y-12 py-10 '>
						<h2 className='text-3xl font-bold mb-6 flex items-center'>
							<span className='w-12 hidden md:block h-[1px] bg-gray-500 mr-4'></span>
							ПОЧЕМУ МЫ
						</h2>
						<p className='text-gray-300 max-w-4xl mb-12'>
							Мы создаем не просто архитектуру, а среду, соответствующую образу
							жизни и потребностям человека и функциональности. Каждый проект
							уникален и разрабатывается индивидуально для каждого клиента. Наша
							цель — создать пространство для жизни.
						</p>

						<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
							{/* Card 1 */}
							<div className='bg-white text-black p-6 shadow-md'>
								<div className='w-14 h-14 rounded-sm flex items-center justify-center mb-4'>
									<svg
										width='46'
										height='58'
										viewBox='0 0 46 58'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M42.4187 25.9746C43.6991 25.0923 45.0235 24.1802 45.0235 22.7925C45.0235 21.4043 43.6991 20.4922 42.4187 19.6099C41.7272 19.1338 40.7802 18.4815 40.6669 18.0563C40.5424 17.5905 41.0292 16.5621 41.4204 15.7362C42.0718 14.3593 42.7461 12.9358 42.0744 11.7747C41.3937 10.5981 39.8091 10.471 38.277 10.3482C37.377 10.2762 36.2568 10.1862 35.929 9.85874C35.6015 9.53131 35.5119 8.41113 35.44 7.51069C35.3172 5.97863 35.1905 4.39444 34.0139 3.71372C32.8519 3.04205 31.4293 3.71588 30.0528 4.3673C29.2264 4.7585 28.1985 5.24535 27.7319 5.12084C27.3066 5.00753 26.6548 4.06055 26.1787 3.36949C25.2959 2.08904 24.3834 0.764648 22.9953 0.764648C21.6075 0.764648 20.6955 2.08904 19.8135 3.36949C19.3375 4.06098 18.6856 5.00753 18.2608 5.12127C17.7942 5.24621 16.7675 4.75936 15.9412 4.36816C14.5638 3.71674 13.1403 3.04334 11.9801 3.71588C10.8039 4.3966 10.6776 5.98078 10.5557 7.51241C10.4842 8.41286 10.395 9.53303 10.0676 9.86047C9.74058 10.1879 8.6204 10.2779 7.72038 10.3499C6.18876 10.4731 4.60457 10.6002 3.92428 11.7768C3.25261 12.9384 3.92687 14.3614 4.57916 15.7379C4.97036 16.5634 5.4572 17.5914 5.33269 18.0571C5.21938 18.4824 4.2724 19.1342 3.58134 19.6103C2.30089 20.4926 0.976501 21.4047 0.976501 22.7925C0.976501 24.1797 2.30089 25.0923 3.58134 25.9742C4.27283 26.4503 5.21938 27.1025 5.33269 27.5273C5.4572 27.9926 4.97036 29.0206 4.57872 29.847C3.92687 31.2231 3.25261 32.6461 3.92385 33.8072C4.60414 34.9838 6.18833 35.1109 7.72038 35.2341C7.97005 35.254 8.23599 35.2764 8.49794 35.3035L1.61931 51.6464C1.35305 52.2789 1.46765 52.9924 1.91874 53.5085C2.37026 54.0255 3.06218 54.2353 3.72395 54.057L7.50626 53.0484L9.74058 56.4347C10.1133 56.9994 10.7575 57.2875 11.3881 57.2275C12.0425 57.168 12.6091 56.7553 12.8663 56.1504L19.1688 41.315C20.2654 42.7409 21.2578 44.8203 22.9953 44.8203C24.7364 44.8203 25.7278 42.7349 26.8285 41.3089L33.1337 56.1508C33.3909 56.7553 33.9575 57.168 34.6119 57.2275C35.2426 57.2875 35.8867 56.9994 36.2594 56.4347L38.511 53.0415L42.276 54.057C42.9382 54.2353 43.6293 54.0255 44.0813 53.5085C44.5323 52.9924 44.6469 52.2789 44.3811 51.6469L37.503 35.3061C37.7639 35.279 38.0284 35.257 38.277 35.2367C39.8091 35.1144 41.3933 34.9873 42.074 33.8107C42.7457 32.6491 42.0718 31.2256 41.42 29.8487C41.0292 29.0223 40.5424 27.9944 40.6669 27.5291C40.7802 27.1034 41.7272 26.4511 42.4187 25.9746ZM11.2136 55.4628L8.97972 52.0764C8.55347 51.4302 7.76579 51.1381 7.02975 51.3375L3.24572 52.3315L10.1727 35.8739C10.3103 36.126 10.3892 36.5598 10.4302 36.8425C10.4436 36.9635 10.4736 37.0633 10.5544 38.0751C10.6764 39.6054 10.8022 41.1879 11.9783 41.8738C13.1412 42.5411 14.5634 41.8699 15.9382 41.2193C16.4698 40.9686 17.0846 40.6773 17.5809 40.5352L11.2136 55.4628ZM38.9707 51.3379C38.2301 51.138 37.4438 51.4336 37.0198 52.0764L34.758 55.4602L28.4182 40.5369C28.9889 40.7024 29.692 41.0502 30.4017 41.3813C31.9495 42.1044 33.6175 42.7013 34.6502 41.284C34.6705 41.2564 34.6966 41.2335 34.7157 41.2051C34.7207 41.1978 34.7237 41.1892 34.7285 41.1814C35.253 40.3775 35.3483 39.2121 35.4395 38.0738C35.4647 37.7576 35.493 37.415 35.5322 37.0885C35.5352 37.0626 35.538 37.0359 35.5412 37.0101C35.5532 36.9161 35.5667 36.8248 35.5811 36.7352C35.6024 36.6025 35.626 36.4754 35.6537 36.3586C35.6656 36.3078 35.6797 36.263 35.6931 36.2165C35.7282 36.0945 35.7664 35.9812 35.8129 35.8933C35.8168 35.8856 35.8214 35.8791 35.8256 35.8718L42.7457 52.3547C40.7441 51.8156 38.8665 51.3099 38.9707 51.3379ZM39.825 30.6035C40.1951 31.3859 40.7543 32.5673 40.5462 32.9266C40.3291 33.3023 39.0094 33.4078 38.1357 33.4781C37.4285 33.5345 36.7112 33.5961 36.0741 33.7607C34.0077 34.1889 33.8298 36.0234 33.6774 37.9355C33.6251 38.5899 33.5529 39.4955 33.3634 39.9992C33.1003 40.6909 32.4865 40.4046 31.1305 39.7747C31.1272 39.773 31.1236 39.7713 31.1202 39.77C31.0415 39.7325 31.0142 39.7206 30.8076 39.6226C30.1102 39.2926 29.4001 38.9609 28.7126 38.7937C28.6616 38.7817 28.61 38.7653 28.5595 38.7545C28.5401 38.7506 28.5214 38.7498 28.5021 38.7459C27.8329 38.6169 27.2107 38.6698 26.6391 39.0509C25.9 39.5184 25.3037 40.3745 24.7251 41.2142C24.2197 41.9474 23.4563 43.0555 22.9953 43.0555C22.5351 43.0555 21.7721 41.9474 21.2672 41.2142C19.4387 38.5581 18.5827 38.0513 15.6372 39.4115C15.4332 39.5057 15.3158 39.5596 15.1859 39.6209C14.4039 39.991 13.223 40.5494 12.8637 40.3417C12.4889 40.1246 12.3842 38.8049 12.3144 37.9316C12.028 34.3283 11.3693 33.7574 7.8617 33.475C6.98839 33.4048 5.66874 33.2988 5.4516 32.924C5.24394 32.5647 5.80316 31.3838 6.17368 30.6027C6.74195 29.4032 7.32918 28.1633 7.03794 27.0715C6.75617 26.0181 5.65108 25.2568 4.5826 24.521C3.84932 24.016 2.74121 23.2526 2.74121 22.7925C2.74121 22.3319 3.84932 21.5689 4.58217 21.0639C5.65108 20.3276 6.75617 19.5663 7.03794 18.5125C7.32918 17.4216 6.74195 16.1817 6.17368 14.9822C5.80359 14.2007 5.24394 13.0198 5.45203 12.6605C5.66874 12.2852 6.98839 12.1792 7.8617 12.1094C9.17316 12.0039 10.5294 11.8949 11.3161 11.1082C12.1029 10.3206 12.2106 8.96433 12.3148 7.65243C12.3846 6.77913 12.4893 5.4599 12.8641 5.24276C13.223 5.03639 14.4044 5.59346 15.1863 5.96355C16.3858 6.53096 17.6257 7.11776 18.7166 6.82609C19.77 6.54432 20.5313 5.43922 21.2672 4.37075C21.7721 3.63747 22.5351 2.52935 22.9953 2.52935C23.4563 2.52935 24.2201 3.63747 24.7255 4.37075C25.4614 5.43922 26.2227 6.54389 27.276 6.82566C28.3678 7.1169 29.6086 6.5301 30.8076 5.96226C31.5892 5.5926 32.7714 5.03338 33.1298 5.24104C33.5055 5.45818 33.6111 6.77826 33.6809 7.652C33.786 8.96347 33.8941 10.3197 34.6813 11.1069C35.4684 11.8936 36.8247 12.0022 38.1361 12.1073C39.0094 12.1775 40.3295 12.2831 40.5467 12.6583C40.7548 13.0176 40.1955 14.199 39.8255 14.981C39.2576 16.18 38.6704 17.4204 38.9621 18.5117C39.2434 19.5655 40.3485 20.3268 41.4174 21.0631C42.1507 21.568 43.2588 22.3315 43.2588 22.7925C43.2588 23.253 42.1507 24.0165 41.4174 24.5218C40.3485 25.2577 39.2434 26.0194 38.9616 27.0732C38.6704 28.1646 39.2572 29.4045 39.825 30.6035Z'
											fill='#C2000A'
										/>
										<path
											d='M23 9.73193C15.7986 9.73193 9.93964 15.5904 9.93964 22.7923C9.93964 29.9933 15.7986 35.8523 23 35.8523C30.2014 35.8523 36.0604 29.9933 36.0604 22.7923C36.0604 15.5904 30.2014 9.73193 23 9.73193ZM23 34.0875C16.7714 34.0875 11.7043 29.0205 11.7043 22.7923C11.7043 16.5637 16.7714 11.4966 23 11.4966C29.2286 11.4966 34.2957 16.5637 34.2957 22.7923C34.2957 29.0205 29.2286 34.0875 23 34.0875Z'
											fill='#C2000A'
										/>
										<path
											d='M29.0028 19.9221H25.5247L24.442 16.6072C24.2369 15.98 23.6557 15.5586 22.9957 15.5586C22.3348 15.559 21.7531 15.9817 21.5485 16.6103L20.474 19.9221H16.9971C16.3362 19.9221 15.755 20.3443 15.5508 20.9729C15.3462 21.6015 15.5681 22.2848 16.1023 22.6739L18.9152 24.7199L17.8416 28.0287C17.6378 28.6573 17.8601 29.3406 18.3952 29.7288C18.9294 30.1166 19.6489 30.1166 20.1832 29.7279L22.9944 27.6841L25.8194 29.7331C26.3581 30.1241 27.0775 30.1179 27.6074 29.7322C28.1416 29.3436 28.3635 28.6608 28.1597 28.0322L27.0847 24.7199L29.8977 22.6734C30.4319 22.2848 30.6538 21.6015 30.4491 20.9729C30.2449 20.3443 29.6637 19.9221 29.0028 19.9221ZM25.903 23.3968C25.3696 23.7854 25.1477 24.4683 25.3515 25.0964L26.2506 27.8659L23.8875 26.152C23.6204 25.9581 23.3072 25.8612 22.994 25.8612C22.6807 25.8612 22.3671 25.9581 22.0995 26.1529L19.7515 27.8603L20.6485 25.0964C20.8523 24.4683 20.6304 23.7854 20.0966 23.3964L17.7459 21.6868H20.6506C21.3124 21.6868 21.894 21.2642 22.0978 20.6351L22.9965 17.8653L23.9022 20.6377C24.1068 21.2655 24.688 21.6868 25.3485 21.6868H28.254L25.903 23.3968Z'
											fill='#C2000A'
										/>
									</svg>
								</div>
								<h3 className='text-2xl font-medium mb-3 text-[#101420]'>
									Опыт и профессионализм
								</h3>
								<p className='text-gray-600 text-sm'>
									Наша команда состоит из опытных архитекторов и дизайнеров с
									многолетним стажем работы. Мы постоянно совершенствуем свои
									навыки и следим за последними тенденциями в архитектуре и
									дизайне.
								</p>
							</div>

							{/* Card 2 */}
							<div className='bg-white text-black p-6 shadow-md'>
								<div className='w-14 h-14 rounded-sm flex items-center justify-center mb-4'>
									<svg
										width='60'
										height='60'
										viewBox='0 0 60 60'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M52.8 9.13624C53.9909 9.13624 54.9545 8.1726 54.9545 6.98169C54.9545 5.79078 53.9909 4.82715 52.8 4.82715C51.6091 4.82715 50.6454 5.79078 50.6454 6.98169C50.6454 8.1726 51.6182 9.13624 52.8 9.13624ZM52.8 6.36351C53.1454 6.36351 53.4273 6.64533 53.4273 6.99078C53.4273 7.33624 53.1454 7.61806 52.8 7.61806C52.4454 7.61806 52.1727 7.34533 52.1727 6.99078C52.1727 6.63624 52.4545 6.36351 52.8 6.36351Z'
											fill='#C2000A'
										/>
										<path
											d='M55.1909 1.34521H10.9C9.21815 1.34521 7.84543 2.71794 7.84543 4.39976V9.0634H4.80906C3.12724 9.0634 1.75452 10.4361 1.75452 12.1179V50.4179C1.75452 52.0998 3.12724 53.4725 4.80906 53.4725H25.1091V57.8907C25.1091 58.3089 25.4545 58.6543 25.8727 58.6543H40.2182C40.6363 58.6543 40.9818 58.3089 40.9818 57.8907V53.4725H49.1C50.7818 53.4725 52.1545 52.0998 52.1545 50.4179V45.7543H55.1909C56.8727 45.7543 58.2454 44.3816 58.2454 42.6998V4.39976C58.2454 2.71794 56.8727 1.34521 55.1909 1.34521ZM9.3727 4.39976C9.3727 3.55431 10.0636 2.87249 10.9 2.87249H55.1909C56.0363 2.87249 56.7182 3.5634 56.7182 4.39976V11.0998H27.7363L24.3272 7.5634C24.0636 7.29067 23.7 7.13612 23.3272 7.13612H15.8182C15.0545 7.13612 14.4272 7.7634 14.4272 8.52703V11.0998H9.3727V4.39976ZM4.80906 51.9543C3.96361 51.9543 3.28179 51.2634 3.28179 50.427V12.1179C3.28179 11.2725 3.9727 10.5907 4.80906 10.5907H7.84543V42.7089C7.84543 44.3907 9.21815 45.7634 10.9 45.7634H27.4818C27.7818 46.3452 27.9182 46.9998 27.8636 47.6725H26.6818C25.8091 47.6725 25.1091 48.3816 25.1091 49.2452V51.9543H4.80906ZM32.2909 35.9634C32.4454 35.6907 32.7272 35.5179 33.0454 35.5179C33.5182 35.5179 33.9 35.8998 33.9 36.3725C33.9 36.6816 33.7363 36.9634 33.4727 37.1179C33.1818 37.2907 32.8363 37.2725 32.4818 37.0725C32.4363 37.0452 32.3909 37.0089 32.3727 36.9634C32.0818 36.4998 32.2 36.1361 32.2909 35.9634ZM32.2818 34.1361C31.7272 34.327 31.2545 34.6998 30.9636 35.227C30.5272 36.0089 30.5818 36.9634 31.0909 37.7816C31.2545 38.0361 31.4727 38.2452 31.7363 38.3998C32.1545 38.6361 32.6091 38.7634 33.0545 38.7634C33.4727 38.7634 33.8818 38.6543 34.2454 38.4452C34.9727 38.0179 35.4272 37.227 35.4272 36.3816C35.4272 35.3361 34.7454 34.4543 33.8091 34.1361V30.2089L40.5636 42.3998C40.5545 42.4089 40.5454 42.427 40.5182 42.4361C38.1272 43.0543 36.5636 45.2907 36.6909 47.6725H29.4091C29.5454 45.2816 27.9727 43.0452 25.5363 42.3634L32.2818 30.2089V34.1361ZM39.4545 57.127H26.6363L26.6818 49.1907H39.4091C39.4363 49.1907 39.4545 49.2089 39.4545 49.2361V57.127ZM50.6272 50.4179C50.6272 51.2634 49.9363 51.9452 49.1 51.9452H40.9818V49.2361C40.9818 48.3634 40.2727 47.6634 39.4091 47.6634H38.2272C38.1727 46.9907 38.3182 46.3361 38.6091 45.7543H50.6272V50.4179ZM55.1909 44.2361H40.0909C40.3363 44.0998 40.6 43.9816 40.8909 43.9089C41.3727 43.7816 41.7636 43.4452 41.9636 42.9907C42.1545 42.5452 42.1272 42.0452 41.8909 41.6179L34.0727 27.5361C33.8727 27.1634 33.4818 26.927 33.0545 26.927C32.6182 26.9361 32.2272 27.1543 32.0182 27.527L24.1909 41.6179C23.9545 42.0452 23.9363 42.5543 24.1272 42.9998C24.3182 43.4543 24.7091 43.7816 25.1909 43.9089C25.4818 43.9816 25.7363 44.0998 25.9909 44.2361H10.9C10.0545 44.2361 9.3727 43.5452 9.3727 42.7089V12.627H14.5545C15.3182 12.627 15.9454 11.9998 15.9454 11.2361V8.6634H23.2636L26.6727 12.1998C26.9363 12.4725 27.3 12.627 27.6727 12.627H56.7182V42.6998C56.7182 43.5452 56.0363 44.2361 55.1909 44.2361Z'
											fill='#C2000A'
										/>
										<path
											d='M47.6 9.13624C48.7909 9.13624 49.7545 8.1726 49.7545 6.98169C49.7545 5.79078 48.7909 4.82715 47.6 4.82715C46.4091 4.82715 45.4454 5.79078 45.4454 6.98169C45.4454 8.1726 46.4091 9.13624 47.6 9.13624ZM47.6 6.36351C47.9454 6.36351 48.2273 6.64533 48.2273 6.99078C48.2273 7.33624 47.9454 7.61806 47.6 7.61806C47.2454 7.61806 46.9727 7.34533 46.9727 6.99078C46.9727 6.63624 47.2545 6.36351 47.6 6.36351Z'
											fill='#C2000A'
										/>
										<path
											d='M42.3909 9.13624C43.5818 9.13624 44.5454 8.1726 44.5454 6.98169C44.5454 5.79078 43.5818 4.82715 42.3909 4.82715C41.2 4.82715 40.2363 5.79078 40.2363 6.98169C40.2363 8.1726 41.2 9.13624 42.3909 9.13624ZM42.3909 6.36351C42.7363 6.36351 43.0181 6.64533 43.0181 6.99078C43.0181 7.33624 42.7363 7.61806 42.3909 7.61806C42.0363 7.61806 41.7636 7.34533 41.7636 6.99078C41.7636 6.63624 42.0454 6.36351 42.3909 6.36351Z'
											fill='#C2000A'
										/>
										<path
											d='M47.7636 19.2817C47.3181 19.7272 47.0363 20.2908 46.9272 20.8908H36.2454V19.6908C36.2454 18.8726 35.5818 18.209 34.7636 18.209H31.3181C30.4999 18.209 29.8363 18.8726 29.8363 19.6908V20.8908H19.1636C19.0636 20.2999 18.7818 19.7363 18.3272 19.2726C17.1727 18.1363 15.1999 18.1544 14.0727 19.2817C13.4999 19.8544 13.1909 20.609 13.1909 21.409C13.1909 22.2181 13.509 22.9817 14.0727 23.5363C14.6454 24.1272 15.409 24.4272 16.1999 24.4272C16.6999 24.4272 17.209 24.309 17.6909 24.0635C18.209 23.7999 18.6363 23.3635 18.8909 22.8272C18.9545 22.6908 19.009 22.5544 19.0545 22.4181H26.4636C22.4363 24.3817 19.3999 28.0726 18.3454 32.5272H17.1636C16.3454 32.5272 15.6818 33.1908 15.6818 34.009V37.4544C15.6818 38.2726 16.3454 38.9363 17.1636 38.9363H20.609C21.4272 38.9363 22.0909 38.2726 22.0909 37.4544V34.009C22.0909 33.1908 21.4272 32.5272 20.609 32.5272H19.9181C21.1909 27.7272 25.0363 23.9635 29.8636 22.7999V23.1272C29.8636 23.9453 30.5272 24.609 31.3454 24.609H34.7909C35.609 24.609 36.2727 23.9453 36.2727 23.1272V22.7999C41.0909 23.9635 44.9363 27.7272 46.2181 32.5272H45.5909C44.7727 32.5272 44.109 33.1908 44.109 34.009V37.4544C44.109 38.2726 44.7727 38.9363 45.5909 38.9363H49.0363C49.8545 38.9363 50.5181 38.2726 50.5181 37.4544V34.009C50.5181 33.1908 49.8545 32.5272 49.0363 32.5272H47.7909C46.7272 28.0726 43.6909 24.3726 39.6727 22.4181H47.1C47.2454 22.8363 47.4818 23.2181 47.7999 23.5363C48.3727 24.1272 49.1363 24.4272 49.9272 24.4272C50.4272 24.4272 50.9363 24.309 51.4181 24.0635C51.9363 23.7999 52.3636 23.3635 52.6181 22.8272C53.209 21.5817 53 20.2272 52.0636 19.2726C50.8727 18.1453 48.8999 18.1544 47.7636 19.2817ZM17.4999 22.1817C17.3909 22.3999 17.209 22.5908 16.9909 22.6999C16.1999 23.0999 15.5181 22.8453 15.1454 22.4544C14.8636 22.1817 14.709 21.809 14.709 21.409C14.709 21.0181 14.8636 20.6453 15.1454 20.3544C15.4272 20.0726 15.7999 19.9181 16.1999 19.9181C16.5909 19.9181 16.9727 20.0726 17.2454 20.3453C17.7181 20.8363 17.809 21.5181 17.4999 22.1817ZM20.5909 37.409L17.1909 37.4544L17.1454 34.0544H20.5454L20.5909 37.409ZM49.009 37.409L45.609 37.4544L45.5636 34.0544H48.9636L49.009 37.409ZM31.3727 23.1363L31.3545 21.9908C31.3727 21.909 31.3727 21.8272 31.3636 21.7363V21.7272C31.3636 21.6999 31.3818 21.6817 31.3818 21.6544C31.3818 21.609 31.3636 21.5726 31.3545 21.5363L31.3272 19.7453H34.7272L34.7545 21.5363C34.7454 21.5817 34.7272 21.6181 34.7272 21.6635C34.7272 21.6908 34.7363 21.709 34.7454 21.7363V21.7453C34.7272 21.8635 34.7363 21.9726 34.7636 22.0726L34.7818 23.0999L31.3727 23.1363ZM51.1999 22.1817C51.0909 22.3999 50.909 22.5908 50.6909 22.6999C49.8999 23.0999 49.2181 22.8453 48.8454 22.4544C48.5636 22.1817 48.409 21.809 48.409 21.409C48.409 21.0181 48.5636 20.6453 48.8454 20.3544C49.1272 20.0726 49.4999 19.9181 49.8999 19.9181C50.2909 19.9181 50.6727 20.0726 50.9454 20.3453C51.4181 20.8363 51.509 21.5181 51.1999 22.1817Z'
											fill='#C2000A'
										/>
									</svg>
								</div>
								<h3 className='text-2xl font-medium mb-3 text-[#101420]'>
									Индивидуальный подход
								</h3>
								<p className='text-gray-600 text-sm'>
									Мы внимательно изучаем потребности и пожелания каждого
									клиента, чтобы создать пространство, которое идеально
									соответствует его образу жизни и эстетическим предпочтениям.
								</p>
							</div>

							{/* Card 3 */}
							<div className='bg-white text-black p-6 shadow-md'>
								<div className='w-14 h-14 rounded-sm flex items-center justify-center mb-4'>
									<svg
										width='56'
										height='60'
										viewBox='0 0 56 60'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M38.0502 40.9944L29.9274 45.7256C29.6909 45.8633 29.4518 45.9764 29.2077 46.0651C29.2685 45.919 29.3207 45.7654 29.3639 45.6045C29.809 43.9432 28.8253 42.21 27.1244 41.6585C27.0842 41.6455 27.0431 41.6352 27.0017 41.6277C24.6851 41.2099 22.3905 40.3804 20.5467 39.7138C19.9019 39.4806 19.2926 39.2604 18.7725 39.0918C16.6121 38.3907 14.6788 39.247 13.0728 40.1768L7.21889 43.5661L6.75694 42.7498C6.17744 41.726 4.87315 41.3645 3.84928 41.9439L1.57022 43.2337C0.546468 43.8131 0.184828 45.1174 0.764203 46.1413L7.46475 57.9806C7.85686 58.6733 8.58073 59.0629 9.3251 59.0629C9.68088 59.0629 10.0412 58.9739 10.3724 58.7865L12.6515 57.4966C13.6752 56.9171 14.0367 55.6129 13.4574 54.589L12.8724 53.5553L13.9861 52.9123L24.3031 55.6766C24.8963 55.8356 25.4865 55.9147 26.0672 55.9146C27.2419 55.9146 28.377 55.5911 29.4147 54.9521L44.1559 45.8752C45.5951 44.9891 46.0558 42.7629 45.1226 41.2047C44.6713 40.4518 42.8284 38.2116 38.0502 40.9944ZM11.7278 55.8649L9.44873 57.1548C9.32674 57.2237 9.16549 57.1792 9.09647 57.0572L2.39592 45.218C2.3269 45.096 2.37166 44.9347 2.49354 44.8657L4.7726 43.5758C4.81163 43.5538 4.85463 43.5434 4.89741 43.5434C4.98834 43.5434 5.07799 43.5906 5.12487 43.6734L11.8254 55.5127C11.8944 55.6347 11.8498 55.7959 11.7278 55.8649ZM43.1727 44.2789L28.4316 53.3559C27.3153 54.0431 26.0896 54.2148 24.7883 53.8659L14.0962 51.0011C13.8559 50.9367 13.6 50.9704 13.3848 51.0947L11.9487 51.9238L8.14233 45.198L14.0121 41.7995C15.3235 41.0402 16.7378 40.4029 18.194 40.8754C18.6844 41.0344 19.2519 41.2396 19.9092 41.4772C21.8014 42.1613 24.1518 43.011 26.599 43.4604C27.3296 43.7236 27.7381 44.4274 27.5527 45.1194C27.3556 45.855 26.8043 46.176 25.9157 46.0752C24.7324 45.8312 23.6036 45.5092 22.4096 45.1682C21.8379 45.0049 21.2468 44.8362 20.6385 44.673C20.1382 44.5392 19.6242 44.8359 19.4903 45.336C19.3564 45.8361 19.6532 46.3501 20.1532 46.4842C20.7468 46.6432 21.3303 46.8098 21.8946 46.971C23.1383 47.3262 24.313 47.6617 25.5819 47.921C25.5883 47.9223 25.5947 47.9228 25.601 47.9239C25.6071 47.9251 25.6131 47.9269 25.6192 47.9278L26.6298 48.0921C28.1922 48.3421 29.5793 48.0979 30.8708 47.3457L38.9938 42.6145C41.1831 41.3394 42.915 41.1686 43.5137 42.1682C43.9179 42.8432 43.7426 43.928 43.1727 44.2789ZM5.32725 45.6738C5.39229 46.1186 5.08444 46.5316 4.63983 46.5967C4.1951 46.6617 3.78202 46.3539 3.71698 45.9093C3.65194 45.4646 3.95979 45.0514 4.4044 44.9864C4.84901 44.9214 5.26221 45.2291 5.32725 45.6738ZM14.6939 15.7664C14.8384 16.0523 14.9686 16.3062 15.0855 16.5341C15.5534 17.4465 15.7882 17.9044 15.8567 18.2926C15.9251 18.6807 15.8611 19.1914 15.7335 20.209C15.7016 20.4632 15.6661 20.7462 15.6281 21.0642C15.4224 22.7846 16.3544 24.3989 17.9473 25.0811C18.2418 25.2071 18.5046 25.3179 18.7406 25.4174C18.8062 25.4449 18.8689 25.4714 18.9299 25.4972L15.1663 33.5809C15.0189 33.8975 15.0597 34.2697 15.2721 34.547C15.4846 34.8241 15.8335 34.9605 16.1775 34.9001L20.3282 34.1749L22.4452 37.8179C22.6135 38.1075 22.9228 38.2843 23.2556 38.2843C23.2698 38.2843 23.2841 38.284 23.2983 38.2834C23.6472 38.2676 23.9583 38.0591 24.1057 37.7426L27.8126 29.7805L27.709 29.7322C28.394 29.5238 28.7894 29.4189 29.1165 29.4189C29.5108 29.4189 30.0026 29.5706 30.9823 29.873C31.0935 29.9073 31.2113 29.9436 31.3344 29.9815L34.0218 36.221C34.1599 36.5418 34.465 36.7591 34.8131 36.785C34.8365 36.7868 34.8598 36.7876 34.883 36.7876C35.2055 36.7876 35.5076 36.6213 35.6794 36.3444L37.901 32.7642L42.0289 33.6096C42.3712 33.6797 42.7237 33.5537 42.9441 33.2829C43.1645 33.012 43.2161 32.6411 43.078 32.3203L40.0105 25.1982C40.0995 25.1605 40.1904 25.1217 40.2858 25.0809C41.8786 24.3988 42.8106 22.7845 42.6051 21.0641C42.567 20.7459 42.5316 20.4628 42.4997 20.2086C42.3721 19.1912 42.308 18.6806 42.3765 18.2924C42.445 17.9043 42.6798 17.4462 43.1478 16.5337C43.2646 16.3058 43.3948 16.0521 43.5393 15.7662C44.3209 14.2199 43.9972 12.3841 42.7339 11.1983C42.5002 10.9789 42.2911 10.785 42.1033 10.6107C41.3515 9.91348 40.9743 9.56344 40.7772 9.22207C40.5801 8.8807 40.4656 8.37891 40.2375 7.37918C40.1806 7.12945 40.1172 6.85137 40.044 6.53941C39.6489 4.85238 38.221 3.65414 36.4909 3.55793C36.1711 3.54012 35.8861 3.52594 35.6303 3.51328C34.6062 3.4623 34.0922 3.43664 33.7218 3.30188C33.3513 3.16711 32.9412 2.85633 32.1239 2.23723C31.9197 2.08254 31.6923 1.91016 31.4358 1.7182C30.0485 0.680039 28.1846 0.680039 26.7975 1.7182C26.5411 1.91016 26.3138 2.0823 26.1095 2.23699C25.2922 2.85621 24.882 3.16711 24.5115 3.30188C24.1411 3.43664 23.6271 3.4623 22.603 3.51328C22.3472 3.52594 22.0623 3.54012 21.7424 3.55793C20.0124 3.65414 18.5844 4.85227 18.1893 6.53941C18.1162 6.85137 18.0528 7.12934 17.9958 7.37906C17.7678 8.37879 17.6533 8.88059 17.4562 9.22195C17.259 9.56332 16.8818 9.91324 16.1302 10.6105C15.9423 10.7848 15.7331 10.9789 15.4995 11.1982C14.236 12.3843 13.9123 14.22 14.6939 15.7664ZM23.1639 35.3229L21.621 32.6679C21.4238 32.3285 21.036 32.1479 20.649 32.2154L17.6241 32.7439L20.5852 26.3839C20.8452 26.6489 21.1189 27.0724 21.599 27.8157C21.738 28.031 21.8928 28.2707 22.0681 28.5389C22.8421 29.7224 24.1512 30.3642 25.508 30.2879L23.1639 35.3229ZM37.6371 30.7963C37.2523 30.7175 36.8595 30.8868 36.6525 31.2204L35.0333 33.8296L33.493 30.253C34.5618 30.0981 35.5387 29.4963 36.1649 28.5388C36.3402 28.2708 36.4949 28.0311 36.6339 27.816C37.1902 26.9545 37.4693 26.5221 37.7713 26.2688C37.9034 26.158 38.0684 26.0575 38.2912 25.946L40.6455 31.4123L37.6371 30.7963ZM16.7824 12.5657C17.0132 12.3491 17.2197 12.1575 17.4052 11.9855C19.1912 10.3286 19.2816 10.1719 19.8236 7.79648C19.8798 7.54992 19.9424 7.27535 20.0146 6.96738C20.2215 6.08402 20.9405 5.48074 21.8464 5.43035C22.1622 5.41277 22.4434 5.39871 22.6961 5.38617C25.1296 5.265 25.2995 5.20312 27.2417 3.73172C27.4432 3.57902 27.6678 3.40898 27.9209 3.21938C28.6471 2.67574 29.5858 2.67574 30.312 3.21938C30.5652 3.40898 30.7898 3.57902 30.9914 3.73184C32.9333 5.20312 33.1033 5.265 35.5368 5.38617C35.7893 5.39871 36.0707 5.41277 36.3865 5.43035C37.2924 5.48074 38.0113 6.08402 38.2183 6.96738C38.2905 7.27535 38.353 7.54992 38.4093 7.79648C38.9513 10.172 39.0416 10.3286 40.8278 11.9856C41.0133 12.1576 41.2198 12.3492 41.4504 12.5657C42.1119 13.1865 42.2749 14.1109 41.8656 14.9205C41.723 15.2027 41.5944 15.4533 41.479 15.6784C40.3671 17.8465 40.3358 18.0246 40.639 20.4421C40.6705 20.6931 40.7056 20.9726 40.7431 21.2868C40.8506 22.1876 40.3814 23.0004 39.5474 23.3575C39.2567 23.482 38.9971 23.5914 38.7639 23.6896C36.5187 24.6357 36.3802 24.752 35.0583 26.7989C34.9212 27.0113 34.7684 27.248 34.5953 27.5126C34.0988 28.2718 33.2165 28.5928 32.3483 28.3304C32.0455 28.2389 31.7765 28.1558 31.5348 28.0813C30.3707 27.7221 29.7435 27.5425 29.1162 27.5425C28.4889 27.5425 27.8617 27.7221 26.6976 28.0813C26.4559 28.1558 26.1867 28.2389 25.8839 28.3304C25.0158 28.5929 24.1335 28.2718 23.637 27.5126C23.4638 27.2479 23.311 27.0111 23.1737 26.7987C21.8521 24.752 21.7136 24.6357 19.4683 23.6896C19.2352 23.5914 18.9756 23.482 18.6849 23.3575C17.8508 23.0003 17.3816 22.1876 17.4893 21.2868C17.5268 20.9727 17.562 20.6933 17.5934 20.4423C17.8965 18.0247 17.8651 17.8466 16.7534 15.6786C16.638 15.4536 16.5094 15.203 16.3668 14.9207C15.958 14.1109 16.121 13.1865 16.7824 12.5657ZM29.1165 24.7617C34.1592 24.7617 38.2619 20.6592 38.2619 15.6165C38.2619 10.5738 34.1594 6.47121 29.1165 6.47121C24.0737 6.47121 19.9712 10.5737 19.9712 15.6165C19.9712 20.6592 24.0739 24.7617 29.1165 24.7617ZM29.1165 8.34621C33.1254 8.34621 36.3869 11.6077 36.3869 15.6165C36.3869 19.6253 33.1254 22.8867 29.1165 22.8867C25.1077 22.8867 21.8462 19.6253 21.8462 15.6165C21.8462 11.6077 25.1077 8.34621 29.1165 8.34621ZM24.5949 16.5091C24.2288 16.143 24.2288 15.5495 24.5949 15.1834C24.961 14.8173 25.5545 14.8173 25.9206 15.1834L27.5398 16.8026L32.3451 12.4417C32.7285 12.0936 33.3214 12.1225 33.6694 12.5059C34.0173 12.8893 33.9886 13.4823 33.6052 13.8302L28.1385 18.7914C27.9593 18.9539 27.7337 19.0346 27.5086 19.0346C27.2681 19.0346 27.0281 18.9427 26.8456 18.7601L24.5949 16.5091ZM55.2075 6.8659L50.5559 1.38727C50.3133 1.10145 49.959 0.9375 49.584 0.9375C49.209 0.9375 48.8546 1.10133 48.612 1.38703C48.6119 1.38703 48.6119 1.38715 48.6119 1.38715L43.9603 6.86566C43.6348 7.24898 43.5637 7.77059 43.7747 8.2268C43.9858 8.68313 44.4294 8.96648 44.9324 8.96648H46.1614V19.7046C46.1614 20.5942 46.885 21.3178 47.7746 21.3178H51.3933C52.2829 21.3178 53.0065 20.5942 53.0065 19.7046V8.96672H54.2356C54.7385 8.96672 55.1822 8.68324 55.3933 8.22703C55.6042 7.77082 55.5331 7.24922 55.2075 6.8659ZM50.0407 2.60098C50.0403 2.60168 50.0397 2.60227 50.0391 2.60285L50.0407 2.60098ZM52.0689 7.09172C51.5512 7.09172 51.1314 7.51148 51.1314 8.02922V19.443H48.0362V8.02922C48.0362 7.51148 47.6165 7.09172 47.0987 7.09172H46.2279L49.5838 3.13922L52.9396 7.09172H52.0689ZM3.99764 8.96672H5.22659V19.7048C5.22659 20.5944 5.95022 21.318 6.83979 21.318H10.4585C11.3481 21.318 12.0717 20.5944 12.0717 19.7048V8.96672H13.3008C13.8038 8.96672 14.2474 8.68324 14.4585 8.22703C14.6696 7.77082 14.5984 7.24922 14.273 6.86602L9.62135 1.38727C9.37866 1.10145 9.0244 0.9375 8.6494 0.9375C8.2744 0.9375 7.91991 1.10133 7.67733 1.38703C7.67721 1.38703 7.67721 1.38715 7.67721 1.38715L3.02569 6.86566C2.70014 7.24898 2.62901 7.77059 2.84006 8.2268C3.05112 8.68324 3.49467 8.96672 3.99764 8.96672ZM9.10608 2.60098C9.10561 2.60168 9.10502 2.60227 9.10444 2.60285L9.10608 2.60098ZM8.64928 3.13922L12.0051 7.09172H11.1344C10.6166 7.09172 10.1969 7.51148 10.1969 8.02922V19.443H7.10159V8.02922C7.10159 7.51148 6.68182 7.09172 6.16409 7.09172H5.29327L8.64928 3.13922Z'
											fill='#C2000A'
										/>
									</svg>
								</div>
								<h3 className='text-2xl font-medium mb-3 text-[#101420]'>
									Качество и надежность
								</h3>
								<p className='text-gray-600 text-sm'>
									Мы гарантируем высокое качество выполнения всех работ и
									соблюдение сроков. Наши проекты отличаются продуманностью
									деталей, функциональностью и долговечностью.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='relative container text-white md:mb-96 py-10 md:py-20'>
				<div className='absolute inset-0 z-0 md:w-10/12 mx-auto  bg-[#101420] h-96  mt-12'></div>{' '}
				<div className='relative px-4 right-0 z-10 '>
					<div className='max-w-5xl mx-auto relative  space-y-12 py-10 '>
						<Carousel
							opts={{
								align: 'start',
							}}
							className='w-full '
						>
							<div className='flex flex-col md:flex-row justify-start md:justify-between md:items-center'>
								<div className='flex items-start md:items-center md:ml-11'>
									<div className='w-12 hidden md:block h-[1px] bg-gray-500 text-start md:mr-4'></div>
									<h2 className='text-3xl font-light tracking-wide'>
										ПУБЛИКАЦИИ
									</h2>
								</div>
								<div className='flex gap-2'>
									<div className='flex items-center  ml-10 gap-4 mt-6 relative'>
										<CarouselPrevious />

										<CarouselNext />
									</div>
								</div>
							</div>
							<div className='grid md:absolute md:-right-32 w-full p-2 '>
								<CarouselContent className='w-full'>
									{posts &&
										posts.map((post, index) => (
											<CarouselItem
												key={index}
												className='md:basis-1/2 lg:basis-1/3 gap-6 py-10 pl-8'
											>
												<div key={index} className='relative text-black p-8 '>
													<div className='w-full h-72'>
														<Image
															src={post.image}
															alt={post.title}
															fill
															className='object-cover'
															priority
														/>
													</div>
													<div className='absolute top-6 left-6 bg-[#d6d6d6] bg-opacity-80 px-4 py-2'>
														<p className='text-[#000000] font-medium text-xs'>
															Интерьер
														</p>
													</div>

													<div className='absolute -bottom-10 p-5 left-0 right-0 mx-4  bg-[#101420] bg-opacity-95 sm:p-4'>
														<div className='space-y-2'>
															<p className='text-[#ffffff] text-sm'>
																{post.date}
															</p>
															<h2 className='text-[#ffffff] text-xl font-light leading-tight'>
																{post.title}
															</h2>

															<div className='flex items-center pt-4'>
																<p className='text-[#ffffff] text-sm uppercase tracking-wider mr-3'>
																	ПОДРОБНЕЕ
																</p>
																<ArrowRight className='text-[#ffffff] w-6 h-6' />
															</div>
														</div>
													</div>
												</div>
											</CarouselItem>
										))}
								</CarouselContent>
							</div>
						</Carousel>
					</div>
				</div>
			</section>
			<section className='w-full container max-w-7xl mx-auto md:p-14 px-4'>
				<div className='md:space-y-20 py-5 md:py-0'>
					{/* Heading with border */}
					<div className=' border-gray-200 pb-2'>
						<h2 className='text-center text-3xl md:text-6xl text-[#101420] font-medium tracking-wide'>
							НАШИ КЛИЕНТЫ
						</h2>
					</div>
					{/* Logos container */}
					<div className='flex md:flex-wrap justify-center items-center  gap-3 md:gap-10'>
						{/* Newsweek */}
						<div className='h-8 flex  justify-center items-center'>
							<Image
								src='Subtract.png'
								alt='Newsweek'
								width={180}
								height={22}
								className='object-contain'
							/>
					
						</div>

						{/* TIME */}
						<div className='h-8 flex  justify-center items-center'>
							{/* <span className="text-red-600 text-2xl font-serif font-bold">TIME</span> */}
							<Image
								src='Vector (1).png'
								alt='Newsweek'
								width={180}
								height={22}
								className='object-contain'
							/>{' '}
						</div>

						{/* The New Yorker */}
						<div className='h-8 flex  justify-center items-center'>
							<Image
								src='path2.png'
								alt='Newsweek'
								width={180}
								height={22}
								className='object-contain'
							/>
						</div>

						{/* Bloomberg */}
						<div className='h-8 flex  justify-center items-center'>
							{/* <span className="text-black font-medium">Bloomberg</span> */}
							<Image
								src='Union.png'
								alt='Newsweek'
								width={180}
								height={22}
								className='object-contain'
							/>
						</div>

						{/* POLITICO */}
						<div className='h-8 flex  justify-center items-center'>
							<Image
								src='Union (1).png'
								alt='Newsweek'
								width={180}
								height={22}
								className='object-contain'
							/>{' '}
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Whywe
