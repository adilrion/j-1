'use client'

import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { useState } from 'react'
import { icons } from '../../../public'
import { Dialog, DialogContent, DialogTitle } from '../ui/dialog'

const Popup = ({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: (open: boolean) => void
}) => {

  const [selectedPayment, setSelectedPayment] = useState('bKash')

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-[400px] p-8 pb-8 bg-[#34735f] rounded-3xl inline-flex flex-col justify-start items-center overflow-hidden border-none focus:outline-none">
        <VisuallyHidden>
          <DialogTitle>Dialog</DialogTitle>
        </VisuallyHidden>
        <section>
          <article className="self-stretch flex flex-col justify-start items-center gap-4">
            <header className="self-stretch inline-flex justify-between items-start overflow-hidden">
              <span className="size-7 relative" />
              <figure className="size-[140px] relative overflow-hidden">
                <img src={icons.payment.src} alt="Payment icon" />
              </figure>
              <button className="size-7 relative overflow-hidden">
                <img src={icons.x.src} className="cursor-pointer" onClick={() => setOpen(!open)} alt="Close icon" />
              </button>
            </header>
            <main className="flex flex-col justify-start items-center gap-8">
              <h1 className="text-center text-[#fde8cd] text-[32px] font-bold font-s-bold">Choose Payment Method</h1>
              <section className="flex flex-col justify-start items-start gap-4">
                <article className="inline-flex justify-start items-start gap-3.5">
                  <label className="py-[5px] flex justify-start items-center gap-2.5 cursor-pointer">
                    <span className="size-[18px] relative">
                      <input
                        type="radio"
                        name="payment-method"
                        value="bKash"
                        checked={selectedPayment === 'bKash'}
                        onChange={() => setSelectedPayment('bKash')}
                        className="size-[18px] absolute opacity-0 peer"
                      />
                      <span className="size-[18px] left-0 top-0 absolute bg-white rounded-full border-[1.50px] border-[#63cfa0] " />
                      {selectedPayment === 'bKash' && (
                        <span className="size-[9px] left-[4.50px] top-[4.50px] absolute bg-[#63cfa0] rounded-full" />
                      )}
                    </span>
                  </label>
                  <div className="flex-1 inline-flex flex-col justify-start items-start gap-1.5">
                    <div className="inline-flex justify-start items-center gap-2">
                      <span className="text-white text-xl font-medium font-s-medium tracking-tight">bKash</span>
                      <figure className="size-[22px] relative overflow-hidden">
                        <img src={icons.bkash.src} className="w-full h-full" alt="bKash icon" />
                      </figure>
                    </div>
                    <p className="text-white text-base tracking-tight">Send the payment now via bKash to confirm your spot instantly.</p>
                  </div>
                </article>
                <article className="inline-flex justify-start items-start gap-3.5">
                  <label className="py-[5px] flex justify-start items-center gap-2.5 cursor-pointer">
                    <span className="size-[18px] relative">
                      <input
                        type="radio"
                        name="payment-method"
                        value="Cash"
                        checked={selectedPayment === 'Cash'}
                        onChange={() => setSelectedPayment('Cash')}
                        className="size-[18px] absolute opacity-0 peer "
                      />
                      <span className="size-[18px] left-0 top-0 absolute bg-white rounded-full border-[1.50px] border-neutral-300 peer-checked:border-[#63cfa0] " />
                      {selectedPayment === 'Cash' && (
                        <span className="size-[9px] left-[4.50px] top-[4.50px] absolute bg-[#63cfa0] rounded-full" />
                      )}
                    </span>
                  </label>
                  <div className="flex-1 inline-flex flex-col justify-start items-start gap-1.5">
                    <div className="inline-flex justify-start items-center gap-2">
                      <span className="text-white text-xl font-medium font-s-medium tracking-tight">Cash</span>
                      <figure className="size-[22px] relative overflow-hidden">
                        <img src={icons.cash.src} className="w-full h-full" alt="Cash icon" />
                      </figure>
                    </div>
                    <p className="text-white text-base tracking-tight">Pay the event fee directly to the host before the game starts.</p>
                  </div>
                </article>
              </section>
              <button className="p-4 bg-[#2b2b2b] w-[336px] h-[56px] rounded-[100px] inline-flex justify-center items-center gap-1 text-white text-lg font-s-bold">
                Continue
              </button>
            </main>
          </article>
        </section>
      </DialogContent>
    </Dialog>
  )
}

export default Popup