import Image from 'next/image'
import Link from 'next/link'
import React, { use, useEffect, useState } from 'react'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from './ui/carousel'

function Design() {
	interface design {
		id: number
		name: string
		description: string
		image: string
	}
	const [design, setDesign] = useState<design[]>([])
	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(
					'https://api.mars-architects.us/portfolio/interior-design/'
				)
				const data = await res.json()
				setDesign(data.data)
			} catch (error) {
				console.error('Error fetching design data:', error)
			}
		}
		fetchData()
	}, [])
	return (
		<div>
			<div className='px-2 max-w-screen-2xl mx-auto my-10' id='design'>
				{/* Top divider */}
				<Carousel
					opts={{
						align: 'start',
					}}
					className='w-full '
				>
					<CarouselContent className='w-full '>
						{design &&
							design.map(item => (
								<CarouselItem className='w-full' key={item.id}>
									<div className='flex w-full flex-col md:flex-row gap-14'>
										{/* Left column - Text content */}
										<div className='space-y-2 md:w-2/5'>
											<div className='space-y-4'>
												<h1 className='text-4xl md:text-6xl font-bold leading-tight'>
													ДИЗАЙН
													<br />
													ИНТЕРЬЕРА
												</h1>

												<div className='mt-6 max-w-sm'>
													<p className='text-sm leading-relaxed'>
														Мы создаем интерьеры, которые отражают стиль,
														характер и образ жизни наших клиентов. В нашей
														работе мы сочетаем эстетику, функциональность и
														современные технологии, чтобы каждый проект был
														уникальным и комфортным.
													</p>
												</div>
												<div>
													<Link
														href='#'
														className='inline-block bg-[#c2000a] text-white px-8 py-3 text-sm font-medium hover:bg-opacity-90 transition-colors'
													>
														ОБСУДИТЬ ПРОЕКТ
													</Link>
												</div>
											</div>

											<div className='text-start md:text-end'>
												<span className='text-[#d6d6d6] opacity-30 text-8xl font-light'>
													{item.id < 10 ? `0${item.id}` : item.id}
												</span>
											</div>
										</div>

										{/* Right column - Image */}
										<div className='md:w-3/5'>
											<Image
												src={item.image}
												width={800}
												height={500}
												alt='Luxury interior design of a dining room'
												className='w-full h-auto object-cover'
												priority
											/>

											{/* Navigation dots */}

											<div className='flex   flex-col      md:flex-row'>
												<div className='flex items-end ml-20  w-14 justify-start   gap-4 mt-6 relative'>
													<CarouselPrevious />
													<CarouselNext />
												</div>

												{/* Project description */}
												<div className='w-full flex  justify-center'>
													<div className='mt-6 md:ml-24 max-w-xl flex flex-col gap-3 '>
														<h2 className='text-3xl font-bold'>{item.name}</h2>
														{item.description
															.split('\n')
															.map((text: string, index: number) => (
																<p
																	key={index}
																	className='text-sm leading-relaxed mb-4'
																>
																	{text}
																</p>
															))}
													</div>
												</div>
											</div>
										</div>
									</div>
								</CarouselItem>
							))}
					</CarouselContent>
				</Carousel>
			</div>
		</div>
	)
}

export default Design
