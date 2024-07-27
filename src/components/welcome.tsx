import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const WelcomeCard = () => {
    return ( 
        <Card className="sm:w-96">
            <CardHeader>
                <CardTitle>Titulo</CardTitle>
                <CardDescription>Descripcion de las cartitas</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Card Content 1</p>
                <p>Card Content 2</p>
                <p>Card Content 3</p>
                <p>Card Content 4</p>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
    );
}
 
export default WelcomeCard;