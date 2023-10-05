import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface HeaderAction {
  icon: React.ReactNode;
  onPress: () => void;
}

interface HeaderComponentProps {
  title: string;
  subtitle?: string;
  onBackPress?: () => void;
  actions?: HeaderAction[];
}

const HeaderComponent = ({
  title,
  subtitle,
  onBackPress,
  actions,
}: HeaderComponentProps) => {
  return (
    <View style={styles.container}>
      {onBackPress && (
        <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
          <Ionicons name="chevron-back-outline" size={24} color="black" />
        </TouchableOpacity>
      )}
      <View style={styles.titleContainer}>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        <Text style={styles.title}>{title.toLocaleUpperCase()}</Text>
      </View>
      <View style={styles.actionsContainer}>
        {actions?.map((action, index) => (
          <TouchableOpacity
            key={index}
            onPress={action.onPress}
            style={styles.actionButton}
          >
            {action.icon}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    gap: 10,
    minHeight: 66,
  },
  backButton: {
    padding: 10,
    borderRadius: 99,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
  actionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButton: {
    padding: 10,
    borderRadius: 99,
  },
  actionText: {
    fontSize: 16,
    color: '#007BFF',
  },
});

export default HeaderComponent;
