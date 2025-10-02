import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import { ms, vs, hs, fs } from '../../utils/Scaling';
import { Colors } from '../../utils/Constants';
import CustomHeader from '../../components/home/CustomHeader';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Calendar } from 'react-native-calendars';
import Icons from '../../components/home/Icons';
// import { Ionicons } from '@expo/vector-icons'; // for dropdown icon

// Type for marked dates
type MarkedDates = {
  [date: string]: {
    startingDay?: boolean;
    endingDay?: boolean;
    color?: string;
    textColor?: string;
  };
};

const JoinWaitlist: React.FC = () => {
  const insets = useSafeAreaInsets();

  const [range, setRange] = useState<{ start?: string; end?: string }>({});
  const [markedDates, setMarkedDates] = useState<MarkedDates>({});
  const [modalVisible, setModalVisible] = useState(false);

  const onDayPress = (day: { dateString: string; [key: string]: any }) => {
    let newRange = { ...range };

    if (!range.start || (range.start && range.end)) {
      newRange = { start: day.dateString };
    } else if (!range.end) {
      const startDate = new Date(range.start);
      const endDate = new Date(day.dateString);
      if (endDate < startDate) {
        newRange = { start: day.dateString, end: range.start };
      } else {
        newRange = { ...range, end: day.dateString };
      }
    }

    setRange(newRange);

    const marked: MarkedDates = {};
    if (newRange.start) {
      marked[newRange.start] = { startingDay: true, color: '#70d7c7', textColor: 'white' };
    }
    if (newRange.end) {
      marked[newRange.end] = { endingDay: true, color: '#70d7c7', textColor: 'white' };

      let current = new Date(newRange.start!);
      while (current < new Date(newRange.end)) {
        current.setDate(current.getDate() + 1);
        const dateStr = current.toISOString().split('T')[0];
        if (dateStr !== newRange.end) {
          marked[dateStr] = { color: '#9ee1d0', textColor: 'white' };
        }
      }
    }

    setMarkedDates(marked);
  };

  const closeModal = () => setModalVisible(false);

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <CustomHeader title="Join the Waitlist" backIcon={true} />
      <View style={styles.subContainer}>
        <Text style={{ color: Colors.text, fontSize: fs(17), fontWeight: '400', marginBottom: vs(10) }}>
          Availability Option
        </Text>
         
       <Text style={{color: Colors.text}}>Date Range</Text>
        {/* DOB-picker style container */}
        <TouchableOpacity style={styles.dateContainer} onPress={() => setModalVisible(true)}>
          <Text style={{ color: range.start && range.end ? Colors.text : '#999', fontSize: fs(15) }}>
            {range.start && range.end ? `${range.start} - ${range.end}` : 'Select Date Range'}
          </Text>
          <Icons iconFamily='Ionicons' name="calendar" size={20} color="#999" />
        </TouchableOpacity>

        {/* Placeholder for Time Range */}
        <View>
          <TouchableOpacity style={styles.dateContainer}>
            <Text>Anytime</Text>
            <Icons iconFamily='Feather' name='clock' size={20}/>
          </TouchableOpacity>
        </View>
      </View>

      {/* Calendar Modal */}
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={{ color: Colors.text, fontSize: fs(16), marginBottom: vs(10) }}>Select Date Range</Text>
            <Calendar
              current={new Date().toISOString().split('T')[0]}
              onDayPress={onDayPress}
              markingType="period"
              markedDates={markedDates}
              enableSwipeMonths={true}
            />
            <TouchableOpacity
              style={[styles.selectButton, { marginTop: vs(15) }]}
              onPress={closeModal}
            >
              <Text style={{ color: 'white', fontSize: fs(15) }}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default JoinWaitlist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  subContainer: {
    flex: 1,
    backgroundColor: '#111111',
    padding: hs(15), 
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: vs(8),
    paddingHorizontal: hs(10),
    backgroundColor: '#222222',
    borderRadius: ms(8),
    borderWidth: 1,
    borderColor: '#444',
    marginBottom: vs(15),
  },
  selectButton: {
    backgroundColor: Colors.primary || '#70d7c7',
    paddingVertical: vs(12),
    paddingHorizontal: hs(15),
    borderRadius: ms(8),
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    padding: hs(15),
  },
  modalContainer: {
    backgroundColor: '#111111',
    borderRadius: ms(10),
    padding: hs(15),
  },
});
