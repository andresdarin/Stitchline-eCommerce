import { products } from "@/data/data";
import { Card } from "@/components/ui/Card";

const StoreGrid = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-[8%]">
            {products.map((product) => (
                <Card key={product.id} product={product} />
            ))}
        </div>
    )
}

export default StoreGrid;