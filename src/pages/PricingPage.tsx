import React from 'react';
import { motion } from 'motion/react';
import { Check, Rocket, Crown, Building2, HelpCircle } from 'lucide-react';
import { cn } from '../utils/cn';

const plans = [
  {
    name: 'Free Plan',
    icon: Rocket,
    price: { monthly: 0, yearly: 0 },
    description: 'Perfect for individuals and small side projects.',
    features: [
      '1 Workspace',
      '5 Active Projects',
      '20 Tasks per project',
      'Community Support',
      'Basic Analytics',
      'Standard Components',
    ],
    buttonText: 'Start for Free',
    isPopular: false,
  },
  {
    name: 'Pro Plan',
    icon: Crown,
    price: { monthly: 19, yearly: 15 },
    description: 'Ideal for growing teams needing advanced power.',
    features: [
      'Unlimited Projects',
      'Unlimited Tasks',
      'Advanced Analytics',
      'Real-time Notifications',
      'Priority Email Support',
      'Team Collaboration Tools',
      'Custom Task Tags',
      'Export to CSV/PDF',
    ],
    buttonText: 'Upgrade Now',
    isPopular: true,
  },
  {
    name: 'Enterprise',
    icon: Building2,
    price: { monthly: 'Custom', yearly: 'Custom' },
    description: 'Advanced features for large organizations.',
    features: [
      'Unlimited Everything',
      'Dedicated Account Manager',
      'SSO & SAML Auth',
      'Custom Roles & Permissions',
      'API Access & Webhooks',
      'Advanced Audit Logs',
      '99.9% Uptime SLA',
      'White-label Dashboard',
    ],
    buttonText: 'Contact Sales',
    isPopular: false,
  },
];

const faqs = [
  { q: "Can I cancel my subscription anytime?", a: "Yes, you can cancel your subscription at any time from your settings panel. Your access will remain active until the end of your billing cycle." },
  { q: "Do you offer discounts for non-profits?", a: "We sure do! Non-profits receive 50% off our Pro and Enterprise plans. Contact our support team to verify your status." },
  { q: "Is there a limit on team members?", a: "The Free plan allows up to 3 members. Pro and Enterprise plans support unlimited team members." },
];

export const PricingPage = () => {
  const [isYearly, setIsYearly] = React.useState(true);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="pt-20 pb-16 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <span className="px-4 py-1.5 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full uppercase tracking-widest mb-6 inline-block">
            Simple, Transparent Pricing
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-emerald-950 mb-6 tracking-tight">
            Plans that scale with <br /> <span className="text-emerald-500"> your ambition.</span>
          </h1>
          <p className="text-xl text-slate-500 mb-10 leading-relaxed">
            Choose the perfect plan for your team. From solo developers to large enterprises, 
            EverTask provides the tools you need to stay productive.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={cn("text-sm font-bold transition-colors", !isYearly ? "text-emerald-900" : "text-slate-400")}>Monthly</span>
            <button 
              onClick={() => setIsYearly(!isYearly)}
              className="w-14 h-8 bg-emerald-900 rounded-full p-1 relative transition-all"
            >
              <motion.div 
                animate={{ x: isYearly ? 24 : 0 }}
                className="w-6 h-6 bg-emerald-400 rounded-full shadow-sm"
              />
            </button>
            <div className="flex items-center gap-2">
              <span className={cn("text-sm font-bold transition-colors", isYearly ? "text-emerald-900" : "text-slate-400")}>Yearly</span>
              <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-[10px] font-bold rounded-md">SAVE 20%</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Plans Grid */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "relative bg-white rounded-[2rem] p-8 border shadow-sm transition-all hover:shadow-xl hover:-translate-y-1",
                plan.isPopular ? "border-emerald-500 ring-4 ring-emerald-500/10" : "border-slate-200"
              )}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full">
                  MOST POPULAR
                </div>
              )}

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600">
                  <plan.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-slate-900">
                    {typeof plan.price.monthly === 'number' ? `$${isYearly ? plan.price.yearly : plan.price.monthly}` : plan.price.monthly}
                  </span>
                  {typeof plan.price.monthly === 'number' && (
                    <span className="text-slate-500 font-medium">/month</span>
                  )}
                </div>
                <p className="text-sm text-slate-500 mt-2">{plan.description}</p>
              </div>

              <button className={cn(
                "w-full py-4 rounded-xl font-bold transition-all mb-8 shadow-lg shadow-emerald-900/5",
                plan.isPopular ? "btn-primary" : "bg-slate-100 text-slate-900 hover:bg-slate-200"
              )}>
                {plan.buttonText}
              </button>

              <div className="space-y-4">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">What's included:</p>
                {plan.features.map((feature) => (
                  <div key={feature} className="flex gap-3 items-center">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-emerald-600" strokeWidth={3} />
                    </div>
                    <span className="text-sm text-slate-600">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Comparison Preview (Mini) */}
      <section className="py-24 bg-white border-y border-slate-100 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-emerald-950 mb-16">Frequently Asked Questions</h2>
          <div className="grid gap-6 text-left">
            {faqs.map((faq, i) => (
              <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shrink-0 shadow-sm">
                    <HelpCircle className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">{faq.q}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
