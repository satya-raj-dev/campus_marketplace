import { motion, useReducedMotion } from 'framer-motion'
import { BadgeCheck, Star } from 'lucide-react'
import { Link ,useParams} from 'react-router'
import { fadeUp, staggerContainer } from '../utils/motion'
import { Container } from '../components/common'
import { useState, useEffect } from 'react';
import { getservice } from '../firebase/firestore';
import type { Service } from '../data/types'


export function ServicePage() {
      const [services, setServices] = useState<Service[]>([]);
      const [loading, setLoading] = useState(true);
      const reduceMotion = useReducedMotion()
      const { categoryId } = useParams();

      useEffect(() => {
        // Define an async function inside useEffect to handle the promise
        const fetchServices = async () => {
          try {
            setLoading(true);
            const data = await getservice(categoryId);
            setServices(data as Service[]);
          } catch (error) {
            console.error("Failed to fetch services:", error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchServices();
      }, []); // Empty array ensures it runs automatically ONLY when page opens
    
      if (loading) {
        return <div>Loading services...</div>;
      }
      return (
        <section className="py-14">
          <Container>
            <motion.div
              className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
              variants={staggerContainer}
              initial={reduceMotion ? false : 'hidden'}
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
            >
              {services.map((service) => (
                  <ServiceCard 
                      key={service.id}
                      service={service}
                  /> 
              ))}
            </motion.div>
          </Container>
        </section>
      )

}


function ServiceCard({ service }: { service: Service }) {
  const { categoryId } = useParams();
  return (
    <Link to={`/service/${categoryId}/${service.id}`} className="block">
      <motion.article
        className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-200/60 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-300/60"
        variants={fadeUp}
      >
        <div className="relative">
          <img
            className="aspect-[1.45/1] w-full object-cover"
            src={service.thumbnail}
            alt={service.title}
          />
          <div className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-white/95 px-3 py-1.5 text-sm font-bold text-ink shadow-md">
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
            {service.rating}
          </div>
          {/* <button
            type="button"
            className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-slate-500 shadow-md transition hover:text-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            aria-label={`Save ${service.name} to favourites`}
          >
            <Heart className="h-5 w-5" aria-hidden="true" />
          </button> */}
        </div>

        <div className="p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
                {service.categoryId}
              </p>
              <h3 className="mt-1 text-lg font-bold text-ink">{service.title}</h3>
            </div>
            {service.verified ? (
              <span className="mt-1 text-brand" aria-label="Verified seller">
                <BadgeCheck className="h-5 w-5 fill-brand/10" />
              </span>
            ) : null}
          </div>
          <p className="mt-3 min-h-12 text-sm leading-6 text-muted">{service.subheading}</p>
          <div className="mt-5 flex items-center justify-between gap-4 border-t border-slate-100 pt-4">
            {/* <div className="flex items-center gap-3">
              <span
                className={cn(
                  'flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold text-white',
                  service.avatarClassName,
                )}
                aria-hidden="true"
              >
                {service.seller
                  .split(' ')
                  .map((part) => part[0])
                  .join('')}
              </span>
              <span>
                <span className="block text-sm font-bold text-ink">{service.seller}</span>
                <span className="block text-xs text-muted">{service.sellerMeta}</span>
              </span>
            </div> */}
            <p className="whitespace-nowrap text-base font-black text-ink">{service.price}</p>
          </div>
        </div>
      </motion.article>
    </Link>
  )
}
