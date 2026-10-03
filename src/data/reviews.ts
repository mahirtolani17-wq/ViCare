export interface Review {
  text: string;
  author: string;
  rating: number;
  treatment?: string;
}

export const reviewsData: Review[] = [
  {
    text: "… already noticing a clear improvement in my skin. The treatments are effective, and the care provided is truly commendable. I would highly recommend this clinic to anyone …",
    author: "Sneha Patel",
    rating: 5,
    treatment: "Acne Therapy"
  },
  {
    text: "Took treatment for acne scars of my wife and taken microneedling session. Within 2 sessions the face was very smooth and glowing and also it shows elevated collagen level …",
    author: "Rajesh Shah",
    rating: 5,
    treatment: "Microneedling & Scar Remodeling"
  },
  {
    text: "… was excellent. My skin felt deeply cleansed, hydrated, and looked noticeably brighter after the session. The doctors and staff were very professional. Highly recommended.",
    author: "Anjali Vyas",
    rating: 5,
    treatment: "Hydrafacial Clinic Treatment"
  }
];

export const googleStats = {
  rating: 4.9,
  totalReviews: 37,
  listingUrl: "https://maps.google.com/maps?vet=10CAAQoqAOahcKEwjYjLCIv52XAxUAAAAAHQAAAAAQCA..i&client=safari&udm&fvr=1&pvq=Cg0vZy8xMXdwN3lkZDE2IhgKEnYgY2FyZSBjbGluaWMgYmhhdBACGAM&lqi=ChJ2IGNhcmUgY2xpbmljIGJoYXRIpuDY_tS7gIAIWiAQABABEAIQAxgCGAMiEnYgY2FyZSBjbGluaWMgYmhhdJIBEHNraW5fY2FyZV9jbGluaWM&cs=0&um=1&ie=UTF-8&fb=1&gl=in&sa=X&ftid=0x395e81b95ee50919:0xe3fd1bdf21b259c9"
};
