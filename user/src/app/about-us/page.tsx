'use client';
import { useAboutUs } from './services';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import { Container } from '@/templates/Container';

export default function AboutUs() {
  const AboutUs = useAboutUs();
  if (AboutUs.isLoading) {
    return <div className={cn('flex justify-center mt-5')}>Loading...</div>;
  }
  const data = AboutUs.data!;
  return null;

  return (
    <div>
      <Container>
        <div className={cn('flex flex-col gap-20 py-20')}>
          <section>
            <div className={cn('text-center')}>
              <h2
                className={cn(
                  'font-display text-3xl tracking-tight text-slate-900',
                  'sm:text-4xl'
                )}
              >
                {data.title}
              </h2>
              <p className={cn('mt-4 text-lg tracking-tight text-slate-700')}>{data.description}</p>
            </div>
            <div className={cn('counter mt-16')}>
              <div className={cn(
                'mx-0 rounded-[20px] bg-white px-10 shadow-lg flex justify-between',
                'lg:py-10'
              )}
              >
                {data.commitmentSection.items.map((item) => {
                  return (
                    <div className={cn(
                      'border-border gap-4 px-10 py-10 flex flex-col items-center text-center',
                      'sm:col-6 lg:col-3 lg:border-r lg:py-0')}
                    >
                      <Image
                        src={item.icon.url}
                        alt=''
                        width={50}
                        height={50}
                        unoptimized
                      />
                      <p>
                        {item.title}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
          <section>
            <div>
              <h2
                className={cn(
                  'font-display text-center text-3xl tracking-tight text-slate-900 mb-6',
                  'sm:text-4xl'
                )}
              >
                {data.developmentSection.title}
              </h2>
              <div className={cn('grid grid-cols-2 gap-8')}>
                <div className={cn(
                  'flex flex-col gap-8',
                  'md:col-6'
                )}
                >
                  <div className={cn('relative')}>
                    <Image
                      className={cn('w-full object-cover')}
                      src={data.developmentSection.images[0].url}
                      alt=''
                      width={480}
                      height={328}
                      unoptimized
                    />
                  </div>
                  <div className={cn('relative')}>
                    <Image
                      className={cn('w-full object-cover')}
                      src={data.developmentSection.images[1].url}
                      alt=''
                      width={480}
                      height={328}
                      unoptimized
                    />
                    <Image
                      className={cn('absolute -bottom-5 -left-5 -z-[1]')}
                      src={'https://themewagon.github.io/pinwheel/images/shape-2.svg'}
                      width={'50'}
                      height={'50'}
                      alt=''
                      unoptimized
                    />
                  </div>
                </div>
                <div className={cn(
                  'flex items-center',
                  'md:col-6'
                )}
                >
                  <div className={cn('relative w-full h-full rounded-lg')}>
                    <Image
                      className={cn('w-full object-cover rounded-[30px]')}
                      src={data.developmentSection.images[2].url}
                      alt=''
                      fill
                      unoptimized
                    />
                    <Image
                      className={cn('absolute -bottom-4 -right-5 -z-[1] h-16 w-16')}
                      src={'https://themewagon.github.io/pinwheel/images/shape-2.svg'}
                      width={'50'}
                      height={'50'}
                      alt=''
                      unoptimized
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div>
              <h2
                className={cn(
                  'font-display text-center text-3xl tracking-tight text-slate-900 mb-6',
                  'sm:text-4xl'
                )}
              >
                {data.missionSection.title}
              </h2>
              <div className={cn('flex gap-10 mt-8 ')}>
                {data.missionSection.items.map((item) => {
                  return (
                    <div className={cn(
                      'sm:col-6 lg:col-4',
                      'mb-8 h-full flex-1'
                    )}
                    >
                      <div className={cn(
                        'rounded-xl h-full bg-white p-6 shadow-lg',
                        'lg:p-8'
                      )}
                      >
                        <span
                          className={cn('text-primary-600 w-[88px] h-[88px] flex justify-center items-center text-5xl bg-primary-100 text-center rounded-full p-4 font-bold top-0 left-0 ')}
                        >{item.index}</span>
                        <h4 className={cn('mb-4 mt-10 font-bold text-slate-900')}>{item.title}</h4>
                        <div className={cn('min-h-[80px]')}>
                          {item.description}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          <section>
            <div>
              <h2
                className={cn(
                  'font-display text-center text-3xl tracking-tight text-slate-900 mb-6',
                  'sm:text-4xl'
                )}
              >
                {data.valueSection.title}
              </h2>
              <div className={cn('grid grid-cols-2 gap-10')}>
                <img
                  src={data.valueSection.image.url}
                  alt=''
                  className={cn('w-full h-auto object-cover rounded-[30px]')}
                />
                <div className={cn('flex flex-col justify-around')}>
                  {data.valueSection.items.map((item) => {
                    return (
                      <div className={cn('flex gap-4')}>
                        <div>
                          <Image
                            src={item.icon.url}
                            width={50}
                            height={50}
                            className={cn('object-cover')}
                            alt=''
                            unoptimized
                          />
                        </div>
                        <div className={cn('flex-1 flex-col gap-2 flex')}>
                          <h3 className={cn('font-bold')}>{item.title}</h3>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}
