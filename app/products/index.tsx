import { ExternalPathString, Link, RelativePathString, Redirect } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Product = {
  id: number;
  name: string;
  href: RelativePathString | ExternalPathString;
};

export default function Product() {

    const isAuthenticated = false;

    if (!isAuthenticated) {
      return <Redirect href="/login" />;
    }

  const products: Product[] = [
    { id: 1, name: "Product 1", href: "/products/1" as RelativePathString },
    { id: 2, name: "Product 2", href: "/products/2" as RelativePathString },
    { id: 3, name: "Product 3", href: "/products/3" as RelativePathString },
    { id: 4, name: "Product 4", href: "/products/deals/playstation-5" as RelativePathString },
    { id: 5, name: "Product 5", href: "/products/electronics/playstation-5" as RelativePathString },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Products</Text>
      {products.map((product) => (
        <Link key={product.id} href={product.href}>
          {product.name}
        </Link>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#da4c24",
  },
});
