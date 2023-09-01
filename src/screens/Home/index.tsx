import {
  FlatList,
  HStack,
  Image,
  ScrollView,
  SectionList,
  Text,
  VStack,
  useTheme
} from 'native-base'

import { useNavigation } from '@react-navigation/native'
import { MapPin } from 'phosphor-react-native'

import coffeeBeansImg from '@/assets/coffeeBeans.png'

import { coffeeCard, coffeeList } from '@/storage/data'

import { Cart } from '@/components/Cart'
import { Input } from '@/components/Form/Input'
import { CoffeeCard } from './components/CoffeeCard'
import { CoffeeItem } from './components/CoffeeItem'

export function Home() {
  const { colors } = useTheme()
  const navigation = useNavigation()

  function goToProductScreen(productId: number) {
    navigation.navigate('product', { productId })
  }

  return (
    <VStack flex={1} bgColor={colors.white}>
      <HStack
        alignItems="center"
        justifyContent="space-between"
        paddingX={32}
        paddingTop={56}
        paddingBottom={20}
      >
        <HStack alignItems="center" style={{ gap: 4 }}>
          <MapPin size={20} weight="fill" color={colors.purple[500]} />
          <Text fontSize="sm" fontFamily="body" color="gray.900">
            Barreiras, BA
          </Text>
        </HStack>

        <Cart
          quantityItemsCart={0}
          onPress={() => navigation.navigate('cart')}
        />
      </HStack>

      <ScrollView
        flex={1}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
      >
        <VStack>
          <VStack>
            <Text marginBottom="4" fontSize="xl" color="white">
              Encontre o café perfeito para qualquer hora do dia
            </Text>

            <Input />

            <Image
              source={coffeeBeansImg}
              resizeMode="contain"
              style={{
                position: 'relative',
                right: -28,
                width: 83,
                height: 83,
                alignSelf: 'flex-end',
                marginBottom: 54
              }}
            />
          </VStack>

          <VStack>
            <FlatList
              data={coffeeCard}
              keyExtractor={(item) => item.id.toString()}
              contentContainerStyle={{ gap: 8, paddingHorizontal: 40 }}
              scrollEventThrottle={16}
              renderItem={({ item }) => (
                <CoffeeCard
                  coffee={item}
                  onPress={() => goToProductScreen(item.id)}
                />
              )}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </VStack>
        </VStack>

        <VStack paddingX={32} paddingY={16} style={{ gap: 16 }}>
          <HStack style={{ gap: 12 }}>
            <Text fontSize="md" fontFamily="heading" color={colors.gray[300]}>
              Nossos cafés
            </Text>
          </HStack>

          <SectionList
            sections={coffeeList}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <CoffeeItem
                key={item.id}
                coffee={item}
                onPress={() => goToProductScreen(item.id)}
              />
            )}
            renderSectionHeader={({ section }) => (
              <Text fontSize="sm" fontFamily="heading" color={colors.gray[400]}>
                {section.title}
              </Text>
            )}
          />
        </VStack>
      </ScrollView>
    </VStack>
  )
}
