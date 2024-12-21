'use client';
// import { Container } from '@/dp__templates/Container';
import { cn } from '@/utils/cn';
import React, { useState } from 'react';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react';
const questions = [
  {
    id: 1,
    question: 'What is Material Tailwind?',
    asnwer:
      'Material Tailwind is a fully coded UI tool kit built on top of Tailwind CSS. It is ',
  },
  {
    id: 2,
    question: 'What is Material Tailwind?',
    asnwer:
      'Material Tailwind is a fully coded UI tool kit built on top of Tailwind CSS. It is ',
  },
  {
    id: 3,
    question: 'What is Material Tailwind?',
    asnwer:
      'Material Tailwind is a fully coded UI tool kit built on top of Tailwind CSS. It is ',
  },
  {
    id: 4,
    question: 'What is Material Tailwind?',
    asnwer:
      'Material Tailwind is a fully coded UI tool kit built on top of Tailwind CSS. It is ',
  },
];
export default function ContactPage() {
  const [isFocused, setIsFocused] = React.useState(false);
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value: any) => setOpen(open === value ? 0 : value);
  return (
    <div>
      <div>
        <section className={cn('mx-auto px-6 py-20')}>
          <div>
            <div className={cn('pb-10 text-center')}>
              <h1 className={cn('mb-5 text-5xl font-bold')}>
                Liên hệ với chúng tôi
              </h1>
              <p
                className={cn(
                  'mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700',
                )}
              >
                Hãy liên hệ với chúng tôi để được hỗ trợ tư vấn
              </p>
            </div>

            <div
              className={cn(
                'mt-10 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3',
              )}
            >
              <div
                className={cn(
                  'flex flex-col items-center justify-center text-center',
                )}
              >
                <span
                  className={cn(
                    'rounded-full bg-blue-100/80 p-3 text-blue-500 dark:bg-gray-800',
                  )}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className={cn('h-6 w-6')}
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </span>

                <h2
                  className={cn(
                    'mt-4 text-lg font-medium text-gray-800 dark:text-white',
                  )}
                >
                  Email
                </h2>
                <p className={cn('mt-2 text-gray-500 dark:text-gray-400')}>
                  Our friendly team is here to help.
                </p>
                <p className={cn('mt-2 text-blue-500 dark:text-blue-400')}>
                  hello@merakiui.com
                </p>
              </div>

              <div
                className={cn(
                  'flex flex-col items-center justify-center text-center',
                )}
              >
                <span
                  className={cn(
                    'rounded-full bg-blue-100/80 p-3 text-blue-500 dark:bg-gray-800',
                  )}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className={cn('h-6 w-6')}
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </span>

                <h2
                  className={cn(
                    'mt-4 text-lg font-medium text-gray-800 dark:text-white',
                  )}
                >
                  Office
                </h2>
                <p className={cn('mt-2 text-gray-500 dark:text-gray-400')}>
                  Come say hello at our office HQ.
                </p>
                <p className={cn('mt-2 text-blue-500 dark:text-blue-400')}>
                  100 Smith Street Collingwood VIC 3066 AU
                </p>
              </div>

              <div
                className={cn(
                  'flex flex-col items-center justify-center text-center',
                )}
              >
                <span
                  className={cn(
                    'rounded-full bg-blue-100/80 p-3 text-blue-500 dark:bg-gray-800',
                  )}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className={cn('h-6 w-6')}
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </span>

                <h2
                  className={cn(
                    'mt-4 text-lg font-medium text-gray-800 dark:text-white',
                  )}
                >
                  Phone
                </h2>
                <p className={cn('mt-2 text-gray-500 dark:text-gray-400')}>
                  Mon-Fri from 8am to 5pm.
                </p>
                <p className={cn('mt-2 text-blue-500 dark:text-blue-400')}>
                  +1 (555) 000-0000
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={cn('pb-20')}>
          <div className={cn('mt-20 text-center')}>
            <h1 className={cn('mb-5 text-5xl font-bold')}>Câu hỏi phổ biến</h1>
            <p
              className={cn(
                'mx-auto mt-6 max-w-2xl pb-12 text-lg tracking-tight text-slate-700',
              )}
            >
              Những giải đáp thắc mắc phổ biến nhất
            </p>
          </div>
          {questions.map((item) => {
            return (
              <Accordion
                placeholder=""
                className={cn('mx-auto w-[80%]')}
                open={open === item.id}
                icon={<Icon id={item.id} open={open} />}
                key={JSON.stringify(item)}
              >
                <AccordionHeader
                  placeholder=""
                  className={cn(
                    'rounded-md border px-4 pb-2 text-base text-gray-700 hover:bg-blue-50',
                    isFocused ? 'bg-primary-50' : '',
                  )}
                  onClick={() => handleOpen(item.id)}
                >
                  {item.question}
                </AccordionHeader>
                <AccordionBody className={cn('px-4 py-0 pt-2 text-gray-900')}>
                  {item.asnwer}
                </AccordionBody>
              </Accordion>
            );
          })}
        </section>

        <section>
          <div className={cn('mt-20 text-center')}>
            <h1 className={cn('mb-5 text-5xl font-bold')}>
              Để lại lời nhắn cho chúng tôi
            </h1>
            <p
              className={cn(
                'mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700',
              )}
            >
              Hãy để lại lời nhắn cho chúng tôi
            </p>
          </div>
          <div className={cn('mx-auto grid grid-cols-2 gap-10 py-12')}>
            <div>
              <div
                className={cn(
                  'mx-auto w-full overflow-hidden rounded-lg bg-white px-8 py-10 shadow-2xl shadow-gray-300/50 lg:max-w-xl dark:bg-gray-900 dark:shadow-black/50',
                )}
              >
                <h1 className={cn('text-lg font-medium text-gray-700')}>
                  Hãy gửi lời nhắn cho chúng tôi
                </h1>

                <form className={cn('mt-6')}>
                  <div className={cn('flex-1')}>
                    <label
                      className={cn(
                        'mb-2 block text-sm text-gray-600 dark:text-gray-200',
                      )}
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className={cn(
                        'mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-0 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-600',
                      )}
                    />
                  </div>

                  <div className={cn('mt-6 flex-1')}>
                    <label
                      className={cn(
                        'mb-2 block text-sm text-gray-600 dark:text-gray-200',
                      )}
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      placeholder="johndoe@example.com"
                      className={cn(
                        'mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-0 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-600',
                      )}
                    />
                  </div>

                  <div className={cn('mt-6 w-full')}>
                    <label
                      className={cn(
                        'mb-2 block text-sm text-gray-600 dark:text-gray-200',
                      )}
                    >
                      Message
                    </label>
                    <textarea
                      className={cn(
                        'mt-2 block h-32 w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-0 md:h-48 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-600',
                      )}
                      placeholder="Message"
                    ></textarea>
                  </div>

                  <button
                    className={cn(
                      'mt-6 w-full transform rounded-full bg-blue-500 px-6 py-3 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-400',
                    )}
                  >
                    Gửi thông tin
                  </button>
                </form>
              </div>
            </div>
            <img
              className={cn('rounded-xl')}
              src="https://kenh14cdn.com/thumb_w/600/NlIG75kVAccccccccccccghA0d7ZgY/Image/2014/03/ksh/Moi-Truong-(2)-32f10.jpg"
              alt=""
            />
          </div>
        </section>
      </div>
    </div>
  );
}

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? 'rotate-180' : ''} h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

// interface IFormInput extends HTMLProps<HTMLInputElement> {
//   label: string;
//   classNameNameNameName?: string;
// }

// export const FormInput = ({ classNameNameNameName, label, ...props }: IFormInput) => {
//   return <label classNameNameNameName={classNameNameNameName}>
//     {label &&
//       <span>
//         {label}
//       </span>
//     }
//     <input type='text'
//       classNameNameNameName={cn(
//         'block w-full rounded-md bg-white px-3.5 py-2 mt-2.5',
//         'text-base text-gray-900',
//         'outline-1 -outline-offset-1 outline-gray-300',
//         'placeholder:text-gray-400',
//         'focus:outline focus:outline-2 focus:-outline-offset-2 focus:primary-600',
//       )}
//       {...props}
//     />
//   </label>
// }

// interface IFormArea extends HTMLProps<HTMLTextAreaElement> {
//   label?: string;
//   classNameNameNameName?: string;
// }

// export const FormArea = ({ classNameNameNameName, label, ...props }: IFormArea) => {
//   return <label classNameNameNameName={classNameNameNameName}>
//     {label &&
//       <span>
//         {label}
//       </span>
//     }
//     <textarea type='text'
//       classNameNameNameName={cn('block w-full mt-2.5 rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:primary-600')}
//       {...props}
//     />
//   </label>
// }

{
  /* <FormInput label='Email' classNameNameNameName={cn('sm:col-span-2')} />
<FormArea rows={4} label='Message' classNameNameNameName={cn('sm:col-span-2')} /> */
}
